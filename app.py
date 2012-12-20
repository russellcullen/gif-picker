import tornado.ioloop
import tornado.web
import tornado.template
import os

def getNameFromPath(path):
	return path.split("/")[-1]

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		ds = []
		for root, dirs, files in os.walk('static/gifs/'):
			if root == 'static/gifs/':
				continue
			ds.append({'name':getNameFromPath(root), 'gifs':[os.path.join(root, f) for f in files]})
		ds.sort(key=lambda f: f['name'])
		self.write(loader.load("static/html/home.html").generate(title="Home", dirs=ds))

settings = {'static_path': os.path.join(os.path.dirname(__file__), "static")}

application = tornado.web.Application([
	(r"/", MainHandler)
], **settings)

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	loader = tornado.template.Loader("./")
	application.listen(port)
	tornado.ioloop.IOLoop.instance().start()


