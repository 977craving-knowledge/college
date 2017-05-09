function shiftBlock(event){
	console.log(event.keyCode);
}

function main(){
	var circle = document.getElementById('circle');
	document.addEventListener('keydown', shiftBlock);
}
document.addEventListener('DOMContentLoaded', main);