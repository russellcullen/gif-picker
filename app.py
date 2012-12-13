import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.write("Hello Gif")


application = tornado.web.Application([
	(r"/", MainHandler)
])

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
	application.listen(port)
	tornado.ioloop.IOLoop.instance().start()
