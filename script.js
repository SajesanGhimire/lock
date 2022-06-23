var canvas = document.getElementById('image'),
		context = canvas.getContext('2d'),
		imageObj = new Image();
imageObj.onload = function() {
	context.drawImage(imageObj, 69, 50);
};
imageObj.src = 'Disclaimer_Intro_Check_Description_For_The_information(720p).mp4';
canvas.oncontextmenu = function() {return false};
