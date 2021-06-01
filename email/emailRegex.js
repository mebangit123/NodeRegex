let email = 'meban.111@gmail.com';
let emailRegex = RegExp('^[0-9a-zA-Z]+([._-+][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}$');

if(emailRegex.test(email))
	console.log("Valid Email");
else
	console.log("Invalid Email");
