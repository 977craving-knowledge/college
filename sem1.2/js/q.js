function oa(){
	var box = document.getElementById('box');
	box.style.background = 'url(images/'+i+'.jpg)';
	i++;
	if (i>7)
		clearInterval(animate);
}

function co(){
	animate = setInterval(oa, 1000);
}

function ml(){
	var box = document.getElementById('box');
	box.addEventListener('click', co);
}

document.addEventListener('DOMContentLoaded', ml);
var animate;
var i = 1;



//function changeOpacity(){
//	var circle = document.getElementById('circle');
//	circle.style.opacity = 0.5;
//}
//
//function first(){
//	var circle = document.getElementById('circle');
//	circle.addEventListener('click', changeOpacity);
//	circle.style.opacity = '1';
//}
//
//document.addEventListener('DOMContentLoaded', first);