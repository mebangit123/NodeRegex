let email = 'mebannongrum111@gmail.com.in';
let emailRegex = RegExp('^[0-9a-zA-Z]+([._-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$');

if(emailRegex.test(email))
	console.log("Valid Email");
else
	console.log("Invalid Email");
