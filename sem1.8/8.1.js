function createDiv(){
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	var textNode = document.createTextNode('test');

	body.appendChild(div);
	div.appendChild(textNode);
}

function clickFunction(){
	createDiv();
}

function mainFunction(){
	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', clickFunction)
}

document.addEventListener('DOMContentLoaded', mainFunction);