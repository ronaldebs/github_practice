/*Guarda en variables el nombre y apellidos
de una persona. Ahora escribe un texto cualquiera y
concatena en medio del texto el nombre de esa
persona en color azul y los apellidos en color verde.*/ 

var name = "Javier".fontcolor("blue");
var lastname = "Machado".fontcolor("green");
var textcomplete = "Mi nombre es " +name+" "+lastname+ " y tengo 24 años";

/*Transforma el texto anterior a mayúsculas
de forma automática (no vale reescribirlo).*/ 

textcomplete = textcomplete.toUpperCase();
document.writeln(textcomplete);

//Haz la raíz cuadrada de 1369.

document.writeln(Math.sqrt(1369));

//Genera un número aleatorio entre 0 y 10 de forma automática.

Math.random()*10;
document.writeln(Math.round(Math.random()*10));


//Escribe un programa que calcule el valor de un cateto conocida la hipotenusa y el otro cateto

var cateto_1 = 15;
var hipotenusa = 27;
var cateto_2 = Math.sqrt(Math.pow(hipotenusa,2)-Math.pow(cateto_1,2));
var cateto_redondeado = cateto_2.toFixed(2);
console.log("El segundo cateto de nuestro triangulo es: "+cateto_redondeado);


/*escribe un programa que calcule la energia de un cuerpo
con el teorema de la relatividad general de einstein*/
// E = mc^2

var a = 70
var d = 300000;
var c = Math.pow(d,2);

console.log(a*c);
document.writeln("la energia de un cuerpo con el teorema de la relatividad general de Einstein es de : "+a*c);


/*escribe un programa que calcule la fuerza con la que se atraen
dos cuerpos */

var a = 6.67384;
var b = Math.pow(10,-11)
var radius = 50;
var radiussquare = Math.pow(50,2);
var mas1 = 20;
var mas2 = 10;

var finalresult = a * b*(mas1 * mas2 / radiussquare);

console.log(finalresult);
document.write("la fuerza con la que se atraen dos cuerpos es de : "+finalresult);





