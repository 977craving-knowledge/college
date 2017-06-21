function clickFunction(){
	var array = [];
	array[0] = 6;
	array[1] = 9;
	array[2] = 7;
	array[3] = 2;
	var number = 10;

	var result = arrayContains(array, number);
	alert(result);
}

function mainFunction(){
	button = document.getElementsByTagName('button');
	button[0] = addEventListener('click', clickFunction);
}
