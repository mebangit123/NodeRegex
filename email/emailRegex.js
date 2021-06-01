let email = 'abc';
let emailRegex = RegExp('^[a-zA-Z]+$');

if(emailRegex.test(email))
	console.log("Valid Email");
else
	console.log("Invalid Email");
