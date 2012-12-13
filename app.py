import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Howdy")

settings = {'static_path': os.path.join(os.path.dirname(__file__), "static")}

application = tornado.web.Application([
	(r"/", MainHandler)
], **settings)

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	application.listen(port)
	tornado.ioloop.IOLoop.instance().start()
