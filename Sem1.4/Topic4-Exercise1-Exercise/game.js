var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function setHead(){
	var element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/' + this.id + '.png)';	
}

function changePressedTrue(event){
	if(event.keyCode == 37) 
		leftPressed = false;
	if(event.keyCode == 38)
		upPressed = false;
	if(event.keyCode == 39)
		rightPressed = false;
	if(event.keyCode == 40) 
		downPressed = false;
}

function changePressedFalse(event){
	if(event.keyCode == 37)
		leftPressed = false;
	if(event.keyCode == 38)
		upPressed = false;
	if(event.keyCode == 39)
		rightPressed = false;
	if(event.keyCode == 40)
		downPressed = false;
}

function walkLeft(){
	var player = document.getElementById('player');
	player.className = 'character standLeft walkLeft';
	player.style.left = player.offsetLeft - 1 + 'px';
}

function walkRight(){
	var player = document.getElementById('player');
	player.className = 'character standRight walkRight';
	player.style.left = player.offsetLeft + 1 + 'px';
}

function walkUp(){
	var player = document.getElementById('player');
	player.className = 'character standUp walkUp';
	player.style.top = player.offsetTop - 1 + 'px';
}

function walkDown(){
	var player = document.getElementById('player');
	player.className = 'character standDown walkDown';
	player.style.top = player.offsetTop + 1 + 'px';
}

function animation(){
	if(leftPressed == true)
		walkLeft();
	if(rightPressed == true)
		walkRight();
	if(upPressed == true)
		walkUp();
	if(downPressed == true)
		walkDown();
}

function main(){
	var heads = document.getElementsByClassName('heads');
	element = heads[0].getElementsByTagName('li');
	for(var i=0; i < element.length ; i++)
		element[i].addEventListener('click', setHead);

	document.addEventListener('keydown', changePressedTrue);
	document.addEventListener('keyup', changePressedFalse);
	setInterval(animation, 10);
}

document.addEventListener('DOMContentLoaded', main);







// function setHead(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
// }
// /*
// function setHead1(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head1.png)';
	
// 	}
	
// function setHead2(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head2.png)';
// }
// function setHead3(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head3.png)';
	
// }
// function setHead4(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head4.png)';
	
// }
// */

// function myLoad(){
// 	var heads = document.getElementsByClassName('heads');
// 	element = heads[0].getElementsByTagName('li');
// 	for(var i=0;i<element.length;i++)
// 		element[i].addEventListener('click',setHead);
	
// 	document.addEventListener('keydown', changePressedTrue);
// 	document.addEventListener('keyup', changePressedFalse);
// 	setInterval(animation, 10);
// }
// var leftPressed = false;
// var upPressed = false;
// var rightPressed = false;
// var downPressed = false;

// function changePressedTrue(event){
// 	if(event.keyCode == 37) leftPressed = true;
// 		if(event.keyCode == 38) upPressed = true;
// 			if(event.keyCode == 39) rightPressed = true;
// 				if(event.keyCode == 40) downPressed = true;
	
// }

// function changePressedFalse(event){
// 	if(event.keyCode == 37) leftPressed = false;
// 		if(event.keyCode == 38) upPressed = false;
// 			if(event.keyCode == 39) rightPressed = false;
// 				if(event.keyCode == 40) downPressed = false;
	
// }

// function animation(){
// 	if(leftPressed == true) walkLeft();
// 	if(upPressed == true) walkUp();
// 	if(rightPressed == true) walkRight();
// 	if(downPressed == true) walkDown();
// 	}

// function walkLeft(){
// 	var player = document.getElementById('player');
// 	player.className = 'character standRight walkRight';
// 	player.style.left = player.offsetLeft - 1 + 'px';
// }

// function walkRight(){
// 	var player = document.getElementById('player');
// 	player.className = 'character standRight walkRight';
// 	player.style.left = player.offsetLeft + 1 + 'px';
// }

// function walkUp(){
// 	var player = document.getElementById('player');
// 	player.className = 'character standup walkUp';
// 	player.style.top = player.offsetTop - 1 + 'px';
// }

// function walkDown(){
// 	var player = document.getElementById('player');		
// 	player.className = 'character standDown walkDown';
// 	player.style.top = player.offsetTop + 1 + 'px';
// }

// document.addEventListener('DOMContentLoaded',myLoad);

































// function setHead0(){
// 	var element = document.getElementsByClassName('head0');
// 	element[0].style.backgroundImage = 'url(images/head0.png)';
// }

// function setHead1(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head1.png)';
// }

// function setHead2(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head2.png)';
// }

// function setHead3(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head3.png)';
// }

// function setHead4(){
// 	var element = document.getElementsByClassName('head');
// 	element[0].style.backgroundImage = 'url(images/head4.png)';
// }

// function setBody0(){
// 	var element = document.getElementsByClassName('body');
// 	element[0].style.backgroundImage = 'url(images/body0.png)';
// }

// function setBody1(){
// 	var element = document.getElementsByClassName('body');
// 	element[0].style.backgroundImage = 'url(images/body1.png)';
// }

// function setBody2(){
// 	var element = document.getElementsByClassName('body');
// 	element[0].style.backgroundImage = 'url(images/body2.png)';
// }

// function setBody3(){
// 	var element = document.getElementsByClassName('body');
// 	element[0].style.backgroundImage = 'url(images/body3.png)';
// }

// function setBody4(){
// 	var element = document.getElementsByClassName('body');
// 	element[0].style.backgroundImage = 'url(images/body4.png)';
// }


// function main(){
// 	var element = document.getElementById('head0');
// 	element.addEventListener('click', setHead0);

// 	var element = document.getElementById('head1');
// 	element.addEventListener('click', setHead1);

// 	var element = document.getElementById('head2');
// 	element.addEventListener('click', setHead2);

// 	var element = document.getElementById('head3');
// 	element.addEventListener('click', setHead3);

// 	var element = document.getElementById('head4');
// 	element.addEventListener('click', setHead4);

// 	var element = document.getElementById('body0');
// 	element.addEventListener('click', setBody0);

// 	var element = document.getElementById('body1');
// 	element.addEventListener('click', setBody1);

// 	var element = document.getElementById('body2');
// 	element.addEventListener('click', setBody2);

// 	var element = document.getElementById('body2');
// 	element.addEventListener('click', setBody2);

// 	var element = document.getElementById('body3');
// 	element.addEventListener('click', setBody3);

// 	var element = document.getElementById('body4');
// 	element.addEventListener('click', setBody4);
// }

// document.addEventListener('DOMContentLoaded', main);