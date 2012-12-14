import tornado.ioloop
import tornado.web
import tornado.template
import os

ds = []

for root, dirs, files in os.walk('static/gifs/'):
	for d in dirs:
		ds.append(os.path.join(root, d))

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(loader.load("dir.html").generate(title="Home", dirs=ds))

class GifHandler(tornado.web.RequestHandler):
    def get(self, slug):
    	g = []
    	for root, dirs, files in os.walk(slug):
    		for f in files:
    			g.append(os.path.join(root,f))
        self.write(loader.load("home.html").generate(title="Home", dirs=g))

settings = {'static_path': os.path.join(os.path.dirname(__file__), "static")}

application = tornado.web.Application([
	(r"/", MainHandler),
	(r"/dir/(.*)", GifHandler)
], **settings)

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	loader = tornado.template.Loader("./")
	application.listen(port)
	tornado.ioloop.IOLoop.instance().start()
