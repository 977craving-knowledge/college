var interval;

function random(max){
	var ran = Math.ceil(Math.random()*max);
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
	//div.style.backgroundColor = 'rgba('+r+', '+g+', '+b+', '+o+')';
	div.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
	div.style.opacity = o;
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	return div;
}

// function fade(){
// 	if(!element.style.opacity){
// 	element.style.opacity = '1';
// 	}
// 	element.style.opacity = element.style.opacity - 0.01;
// 	if(element.style.opacity == 0){
// 		element.parentNode.removeChild(element);
// 		//mainFunction();
// 		clearInterval(interval);
// 	}
// }

function fadeOut(element){
	interval = setInterval(function(){ //using closure function
		if(!element.style.opacity){
	element.style.opacity = '1';
	}
	element.style.opacity = element.style.opacity - 0.01;
	//if(element.style.opacity == 0){
	if(element.style.opacity < 0){
		element.parentNode.removeChild(element);
		//mainFunction();
		clearInterval(interval);
	}
	}, 100);
}

function clickFunction(){
	fadeOut(this);
}

function mainFunction(){
	var r = random(50);
	for(var i=0;i<r;i++){
		var div = createDiv();
		div.addEventListener('click', clickFunction);
	}
}

document.addEventListener('DOMContentLoaded', mainFunction);