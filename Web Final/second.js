var interval;

function random(max){
	var ran = Math.floor(Math.random()*max);
	return ran;
}

function createDiv(){
	var left = random(1300);
	var top = random(500);
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var o = Math.random();//random number from 0 to 1
	var div = document.createElement('div');
	div.style.left = left+'px';
	div.style.top = top+'px';
	div.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
	div.style.opacity = o;
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	return div;
}

function moveElement(element){
	var x = random(10)-5;
	var y = random(10)-5;
	var speed = random(100);
	interval = setInterval(function(){
		var left = element.offsetLeft;
		var top = element.offsetTop;
		element.style.left = left + x + 'px';
		element.style.top = top + y + 'px';
	} ,speed);
}

function clickFunction(){
	moveElement(this);
}

function mainFunction(){
	var r = random(50);
	for(var i=0;i<r;i++){
		var div = createDiv();
		div.addEventListener('click', clickFunction);
	}
}

document.addEventListener('DOMContentLoaded', mainFunction);