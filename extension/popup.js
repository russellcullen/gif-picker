window.onload = showGifs

function showGifs() {
  for (var i = 0; i < 10; i++) {
    var img = document.createElement("image");
    img.src = "http://gif-picker.herokuapp.com/static/gifs/awesome/mind-blow.gif";
    document.body.appendChild(img);
  }
}