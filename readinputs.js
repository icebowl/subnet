// npm install readline-sync
var readline = require('readline-sync');

function decbin(n)
{ var d = 128; // divisor
	var i;
	var binstring = ""
	var q = 0;
	for (i = 0; i < 8; i++){
		//console.log(n,d,q);
		q = parseInt(n/d);
		n = n - ( d * q);
		d = d / 2;
		binstring = binstring + q;
		
	}
	//console.log(binstring);
	return binstring;
}

var o1 = readline.question("OCTET 1 : ");
console.log("OCTET 1 : " + o1 );
bin = decbin(o1);
//console.log(bin);
var nibble1 = bin.substr(0,4);
var nibble0 = bin.substr(5,8);
binarynibble = nibble1+" "+nibble0;
console.log(binarynibble);
