var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

//function factorial(){
//	var i;
//	var fact = 1;
//	for(i=n;i>=1;i--){
//		fact = fact*i;
//	}
//	console.log('Factorial of ' + n + '=' + fact);
//}

//var n = parseInt(prompt('Enter a number: '));
//factorial(n);





//function power(a, b){
//	var result = Math.pow(a, b);
//	console.log('Power = '+result);
//}
//var a = parseInt(prompt('Enter first number: '));
//var b = parseInt(prompt('Enter second number: '));
//power(a, b);



//var result = confirm('Are you a male?');
//if(result == true)
//	alert('You are a male');
//else
//	alert('You are a female');