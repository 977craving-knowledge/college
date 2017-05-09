function shiftLeft(){
	var circle = document.getElementById('circle');
	leftValue = circle.offsetLeft;
	circle.style.left = leftValue - 10 + 'px';
}

function shiftRight(){
	var circle = document.getElementById('circle');
	leftValue = circle.offsetLeft;
	circle.style.left = leftValue + 10 + 'px';
}

function shiftTop(){
	var circle = document.getElementById('circle');
	topValue = circle.offsetTop;
	circle.style.top = topValue - 10 + 'px';
}

function shiftBottom(){
	var circle = document.getElementById('circle');
	topValue = circle.offsetTop;
	circle.style.top = topValue + 10 + 'px';
}

function shiftBlock(event){
	console.log(event.keyCode);
	if (event.keyCode == 37)
		shiftLeft();
	if (event.keyCode == 39)
		shiftRight();
	if (event.keyCode == 38)
		shiftTop();
	if (event.keyCode == 40)
		shiftBottom();
}

function main(){
	var circle = document.getElementById('circle');
	document.addEventListener('keydown', shiftBlock);
}
document.addEventListener('DOMContentLoaded', main);