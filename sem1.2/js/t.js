function changeOpacity(){
	var circle = document.getElementById('circle');
	opacity = parseFloat(circle.style.opacity);
	circle.style.opacity = opacity + 0.001;
}

function first(){
	var circle = document.getElementById('circle');
	setInterval(changeOpacity, 100);
	circle.style.opacity = '0.1';
}

document.addEventListener('DOMContentLoaded', first);