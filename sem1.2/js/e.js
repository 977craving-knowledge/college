function changeOpacity(){
	var circle = document.getElementById('circle');
	opacity = circle.style.opacity;
	circle.style.opacity = opacity - 0.1;
}

function first(){
	var circle = document.getElementById('circle');
	circle.addEventListener('click', changeOpacity);
	circle.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', first);