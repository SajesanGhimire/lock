var canvas = document.getElementById('image'),
		context = canvas.getContext('2d'),
		imageObj = new Image();
imageObj.onload = function() {
	context.drawImage(imageObj, 69, 50);
};
imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
canvas.oncontextmenu = function() {return false};
