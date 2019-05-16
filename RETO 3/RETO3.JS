/*Ejercicio 1
Utiliza una secuencia if/else para decidir si
un peatón debe cruzar un paso de cebra o no.*/

/*Ejercicio 2
Piensa en La Liga española y utiliza una
secuencia switch/case para saber si un equipo gana
la liga, entra en champions, entra en uefa, consigue
la permanencia o baja a segunda división.*/



//Escribe un programa para la gestion de salarios de una gran compañia
/*
var name = prompt("Escribe el nombre del empleado");
var surname = prompt("Escribe el apellido del empleado");
var salary = prompt("Cuanto cobras");
var retention = prompt("Cuanto te retienen en porcentaje");
var happy = prompt("Eres feliz?");

var final_salary = salary - (salary * retention / 100);

var employee = {
    "Name": name,
    "Lastname": surname,
    "Salary": salary,
    "Salary_net": final_salary,
    "Happy": happy
}

console.log("El empleado "+ employee.Name+ " " + employee.Lastname+ " tiene que cobrar: "+employee.Salary_net+ "€ netos");

console.log(employee);
*/

/*console.log(parseInt(salary)+15)
salary + 15 es decir lo suma*/

/*Crear una aplicación que recoja cuantos votos tiene cada uno de los partidos
Extra: ver quien ha ganado
Extra Extra: Aplicar la ley de HONS y sacar los escaños*/
/*
var psoe = prompt("Escribe el numero de votos del psoe");
var podemos = prompt("Escribe el numero de votos de podemos");
var pp = prompt("Escribe el numero de votos del pp");
var ciudadanos = prompt("Escribe el numero de votos de ciudadanos");

var candidates = {
    "Psoe": psoe,
    "Podemos": podemos,
    "PP": pp,
    "Ciudadanos": ciudadanos
}

var victory = Math.max(psoe,podemos,pp,ciudadanos);

if(psoe == victory){
    document.write("El ganador es psoe");
} else if(podemos == victory){
    document.write("El ganador es podemos");
} else if(pp == victory) {
    document.write("El ganador es pp");
} else {
    document.write("El ganador es ciudadanos");
}
console.log(candidates);
*/



//clases con Javi

/*-------version 1

var score = Number(5);
var approved = String("");

if(score>=8) {
    approved = "Passed!:)";
} else {
    approved = "Failed....:(";
}

console.log(approved);*/

/*-------version 2

var score = Number(5);
var approved = Boolean()

if(score>=8) {
    approved = true
}

console.log(approved);*/


// menos 5= suspenso.... 5a6= aprobado.....6a7= bien......7a9=notable......9a10=sobresaliente
/*
var note = 10;

if(note<5) {
    console.log("Suspenso");
} else if(note<6) {
    console.log("Aprobado");
} else if(note<7) {
    console.log("Bien");
} else if(note<9) {
    console.log("Notable");
} else if(note<11) {
    console.log("Sobresaliente");
} else {
    console.log("Este numero no es valido");
};
*/

/*
var user_level = String("medium")
var discount = Number(0);

switch(user_level) {
case "premium": discount = 0.15;
break;
case "pro": discount = 0.12;
break;
case "medium": discount = 0.10
break;
case "basic": discount = 0.08;
break;
default: discount = 0.05;
}

console.log(discount);
*/

/*
var hour = Number(17);
var greeting = String("");

if (hour<12) {
    greeting = "Good morning";
} else if (hour<20) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
document.write(greeting);
console.log(greeting);
*/

// 1=="1" es true y 1==="1" es false

/* Utiliza una secuencia if/else para decidir si un peaton debe cruzar
un paso de cebra o no*/

/*
var light = "rojo";
if(light == "verde") {
    console.log("Puedes cruzar");
} else {
    console.log("STOP");
};
*/

/* piensa en la liga española y utiliza una secuencia switch/case para saber
si un equipo gana la liga, entra en champions, entra en uefa, consigue la permanencia
o baja a segunda division.*/

/*
var position = 1

switch (true) {
    case position === 1:
        console.log("Campeon y entra en la Champions League");
        break;
    case position > 1 && position < 5:
        console.log("Entra en la Champions League");
        break;
    case position > 4 && position < 7:
        console.log("Entra en la Europa League");
        break;
    case position > 6 && position < 18:
        console.log("Consigue la permanencia");
        break;
    case position > 17 && position < 21:
        console.log("Baja a segunda division");
        break;
    default:
        console.log("Ya estas en segunda division");
};
*/





/*Ejercicio 3
Piensa un escenario en el que se quiere
decidir un restaurante para una celebración. Los
organizadores quieren que cumpla uno de los
siguientes puntos:


- Que haya 3 platos en el menú, que incluya DJ y dos
horas de barra libre.


- Que haya cóctel de bienvenida, menú con dos
platos y una hora de barra libre.*/


var plates = 3;
var dj = true;
var happy_hour = 2;
var coctel = true;

if(plates === 3 && dj === true && happy_hour === 2) {
    console.log("Si entra")
} else if (coctel === true && plates ===2 && happy_hour === 1) {
    console.log("Tambien entra")
} else {
    console.log("No quiero ese restaurant")
}











