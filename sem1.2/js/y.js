function changeOpacity(){
	var circle = document.getElementById('circle');
	opacity = parseFloat(circle.style.opacity);
	circle.style.opacity = opacity + 0.1;
	if(circle.style.opacity == 1)
		clearInterval(animate);
}

function animation(){
	animate = setInterval(changeOpacity, 1000);
}

function first(){
	var circle = document.getElementById('circle');
	circle.style.opacity = '0.1';
	circle.addEventListener('click', animation);
}

document.addEventListener('DOMContentLoaded', first);
var animate;
//Banauna baaki xa