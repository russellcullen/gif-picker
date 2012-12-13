
var req = new XMLHttpRequest()
req.open("GET", "http://gif-picker.herokuapp.com")
req.onload = show
req.send(null)

// window.onload = showGifs

function showGifs() {
  for (var i = 0; i < 10; i++) {
    var img = document.createElement("image");
    img.src = "http://gif-picker.herokuapp.com/static/gifs/awesome/mind-blow.gif";
    document.body.appendChild(img);
  }
}

function show() {
	document.write(req.response)
}