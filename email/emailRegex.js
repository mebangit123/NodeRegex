let email = 'meban@gmail.com';
let emailRegex = RegExp('[a-zA-Z]+*@[a-zA-Z]+.[a-zA-Z]{2,4}');

if(emailRegex.test(email))
	console.log("Valid Email");
else
	console.log("Invalid Email");
