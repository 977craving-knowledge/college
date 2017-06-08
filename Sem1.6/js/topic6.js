function clickMe(){
	// alert('a,fhd');
	var div = document.getElementsByTagName('div');
	if(div.length>0){
		div[0].parentNode.removeChild(div[0]);
	}

	var color = [];
	color[0] = 'blue';
	color[1] = 'green';
	color[2] = 'red';
	color[3] = 'yellow';
	color[4] = 'orange';
	var r = Math.floor(Math.random()*5);

	var div = document.createElement('div');
	div.style.backgroundcolor = color[r];

	var border = [];
	border[0] = 'solid';
	border[1] = 'dashed';
	border[2] = 'dotted';
	var bSize = Math.ceil(Math.random()*15);
	var bType = Math.floor(Math.random()*3);
	var bColor = Math.floor(Math.random()*5);

	div.style.border = bSize+'px '+border[bType]+' '+color[bColor];
	var body = document.getElementsByTagName('body');
	body[0].appendChild(div);
}

function mainFunction(){
	var button = document.getElementsByTagName('a')[0];
	button.addEventListener('click', clickMe);
}

document.addEventListener('DOMContentLoaded', mainFunction);



























// function clickMe(){
// 	// alert('a,fhd');
// 	var color = [];
// 	color[0] = 'blue';
// 	color[1] = 'green';
// 	color[2] = 'red';
// 	color[3] = 'yellow';
// 	color[4] = 'orange';
// 	var r = Math.floor(Math.random()*5);

// 	var div = document.createElement('div');
// 	div.style.backgroundcolor = color[r];

// 	var border = [];
// 	border[0] = 'solid';
// 	border[1] = 'dashed';
// 	border[2] = 'dotted';
// 	var bSize = Math.ceil(Math.random()*15);
// 	var bType = Math.floor(Math.random()*3);
// 	var bColor = Math.floor(Math.random()*5);

// 	div.style.border = bSize+'px '+border[bType]+' '+color[bColor];
// 	var body = document.getElementsByTagName('body');
// 	body[0].appendChild(div);
// }

// function mainFunction(){
// 	var button = document.getElementsByTagName('a')[0];
// 	button.addEventListener('click', clickMe);
// }

// document.addEventListener('DOMContentLoaded', mainFunction);












// function clickMe(){
// 	var color = [];
// 	color[0] = 'blue';
// 	color[1] = 'green';
// 	color[2] = 'red';
// 	color[3] = 'yellow';
// 	var r = Math.floor(Math.random()*3);
// 	var div = document.getElementsByTagName('div')[0];
// 	div.style.backgroundcolor = color[r];
// }

// function mainFunction(){
// 	var button = document.getElementsByTagName('a');
// 	button.addEventListener('click', clickMe);
// }

// document.addEventListener('DOMContentLoaded', mainFunction);