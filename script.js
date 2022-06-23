var canvas = document.getElementById('image'),
		context = canvas.getContext('2d'),
		imageObj = new Image();
imageObj.onload = function() {
	context.drawImage(imageObj, 69, 50);
};
imageObj.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ58kzNphir9_Q_3AwYRCnJ2l7-Zpqg5lQftc8GYKm-zUpcfhVmGac5EaesGxaUPxp-jypoWOSP7W4TZiDwrTSSp-TmRUbkGOnl5WvvvtZ46Fu7Ohz1k6WF8-98AR7M27SIGY42NLhEF9UL2gilAo4pj_5eEqyxH7hcYZbBQKcx7MAoPH71ItrjGFC-A/s1280/fb.jpg';
canvas.oncontextmenu = function() {return false};
