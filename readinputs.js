// npm install readline-sync
var readline = require('readline-sync');

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}





var o1 = readline.question("OCTET 1 : ");
console.log("OCTET 1 : " + o1 );
