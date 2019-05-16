/*var n = 1
undefined
typeof(n);
"number"*/
/*var x = "1"
undefined
typeof(x)
"string"*/
/*var number = Number(10)
typeof(number)
"number"*/

/*var n = 1;
undefined
typeof(n)
"number"
var x = "1";
undefined
typeof(x)
"string"
x = false;
false
y = true;
true
typeof(x)
"boolean"
typeof(y);
"boolean"
var r;
undefined
var n1 = Number(22);
undefined
n1 = Number(22);
22
typeof(n1);
"number"
n2 = Number(7.43);
7.43
typeof(n2);
"number"
text1 = String("eeee");
"eeee"
text1;
"eeee"
var text2 = "aaaa";
undefined
text2;
"aaaa"
typeof(text1);
"string"
typeof(text2);
"string"
text2;
"aaaa"
var symbol = Symbol();
undefined
typeof(symbol);
"symbol"
var symb1 = Symbol("Javier")
undefined
typeof(symb1);
"symbol"
document.write(symb1);
VM755:1 Uncaught TypeError: Cannot convert a Symbol value to a string
    at <anonymous>:1:10
(anonymous) @ VM755:1
symb1;
Symbol(Javier)
var screen = Object();
undefined
screen;
{}
typeof screen;
"object"
typeof(screen);
"object"*/

var bank_account_santander = Number(-1000);
var bank_account_bankia = Number(943.92);
var accounts_total_amount = Number(bank_account_santander + bank_account_bankia);

var positive = Boolean();

if (accounts_total_amount>0) {
    positive = Boolean(true);
}
console.log(positive);

/*var parag1 = "Lo hemos estado viendo constantemente en los ejemplos de cada uno de los tipos hasta ahora, pero para dar más claridad a la sintaxis y al uso, una variable es un contenedor que almacena un valor.";

var parag2 = "Es una manera de poner nombre o codificar datos y/o valores que nos son útiles, interesantes o necesarios para lo que estamos haciendo.";

var parag3 = "La sintaxis de definición es sencilla.";

document.write(parag1+"<br>"+parag2+"<br>"+parag3);*/




