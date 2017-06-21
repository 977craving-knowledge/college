var pickedNumbers = [];

function createLi(n){
	var ul = document.getElementsByTagName('ul')[0];
	var li = document.createElement('li');
	var textNode = document.createTextNode(n);
	li.appendChild(textNode);
	ul.appendChild(li);
}

function arrayContains(array, number){
	var found = false;
	for(var j=0;j<array.length;j++){
			if(number == array[j]){
				found = true;
			}
		}
		return found;
}

function newRandom(){
	var newNumber = false;
	while(newNumber == false){
		var r = Math.ceil(Math.random()*100);
		var alreadyPicked = arrayContains(pickedNumbers, r);
		if(alreadyPicked == false){
			newNumber = true;
		}
	}
	return r;
}

function clickFunction(){
	var r = newRandom();
	pickedNumbers.push(r);
	createLi(r);
}

function mainFunction(){
	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', clickFunction)
}

document.addEventListener('DOMContentLoaded', mainFunction);