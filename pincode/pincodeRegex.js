let pincode = '400088B';
let pincodeRegex = RegExp('^[1-9]{1}[0-9]{5}$');

if(pincodeRegex.test(pincode))
	console.log("Valid Pincode");
else
	console.log("Invalid Pincode");
