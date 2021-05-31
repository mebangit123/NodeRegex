let pincode = '400 088';
let pincodeRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');

if(pincodeRegex.test(pincode))
	console.log("Valid Pincode");
else
	console.log("Invalid Pincode");
