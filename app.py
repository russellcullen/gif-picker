import tornado.ioloop
import tornado.web
import tornado.template
import os

base = "http://gif-picker.herokuapp.com/static/gifs/"

test = []

for root, dirs, files in os.walk('static/'):
	for f in files:
		test.append(os.path.join(root, f))

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(loader.load("home.html").generate(title="Home", dirs=test))

settings = {'static_path': os.path.join(os.path.dirname(__file__), "static")}

application = tornado.web.Application([
	(r"/", MainHandler)
], **settings)

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	loader = tornado.template.Loader("./")
	application.listen(port)
	tornado.ioloop.IOLoop.instance().start()
