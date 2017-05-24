var interval;
function shiftLeft(){
	var circle = document.getElementById('circle');
	leftValue = circle.offsetLeft;
	circle.style.left = leftValue - 1 + 'px';
}

function shiftRight(){
	var circle = document.getElementById('circle');
	rightValue = circle.offsetRight;
	circle.style.right = rightValue + 1 + 'px';
}

function shiftUp(){
	var circle = document.getElementById('circle');
	topValue = circle.offsetTop;
	circle.style.top = upValue - 1 + 'px';
}

function shiftDown(){
	var circle = document.getElementById('circle');
	bottomValue = circle.offsetBottom;
	circle.style.bottom = bottomValue + 1 + 'px';

function shiftBlock(event){
	clearInterval(interval);
	if(event.keyCode == 37)
		interval = setInterval(shiftLeft, 10);
	if(event.keyCode == 39)
		interval = setInterval(shiftRight, 10);
}

function main(){
	var circle = document.getElementById('circle');
	document.addEventListener('keyDown', shiftBlock);
}

document.addEventListener('DOMContentLoaded', main);