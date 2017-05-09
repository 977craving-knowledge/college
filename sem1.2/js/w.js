function mouseenter(){
	var circle = document.getElementById('circle');
	circle.style.opacity = 0.7;
}

function mouseleave(){
	var circle = document.getElementById('circle');
	circle.style.opacity = 1;
}

function first(){
	var circle = document.getElementById('circle');
	circle.addEventListener('mouseenter', mouseenter);
	circle.addEventListener('mouseleave', mouseleave);
	circle.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', first);