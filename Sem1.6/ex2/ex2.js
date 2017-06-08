
function drawNumbers(){
	var t = this.parentNode.getElementsByTagName('table');
	if(t.length>0){
		this.parentNode.removeChild(t[0]);
	}
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	table.appendChild(tr);
	for(var i =0; i<6; i++){
		var r = Math.ceil(Math.random()*50);
		var td = document.createElement('td');
		var textNode = document.createTextNode(r);
		td.appendChild(textNode);
		tr.appendChild(td);
	}
	this.parentNode.appendChild(table);
}

function myLoad(){
	var buttons = document.getElementsByTagName('button');
	for(var i=0;i<buttons.length;i++){
		buttons[i].addEventListener('click', drawNumbers);
	}
}
document.addEventListener('DOMContentLoaded', myLoad);



// function drawNumbers() {
// 	var tableCells = this.parentNode.getElementsByTagName('td');

// 	for (var i = 0; i < tableCells.length; i++) {
// 		var randomNumber = Math.ceil(Math.random() * 49);
// 		tableCells[i].firstChild.nodeValue = randomNumber;
// 	}
// }

// function myLoadEvent() {
// 	var buttons = document.getElementsByTagName('button');

// 	for (var i = 0; i < buttons.length; i++) {
// 		buttons[i].addEventListener('click', drawNumbers);
// 	}
// }

// document.addEventListener('DOMContentLoaded', myLoadEvent);

