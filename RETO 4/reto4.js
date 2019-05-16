/* Ejercicio 1
Construye un sistema que nos muestra por
pantalla todos los números del 1 al 10. Construyelo
de las 3 maneras vista en el día. */

/*
var num = [1,2,3,4,5,6,7,8,9,10]
for(var i=0; i<=10; i++) {
    console.log(num[i]);
};
*/

/*
var i = 0;
do {
    console.log(i);
    i++
} while(i<=10);
*/

/*
var i = 0;
while(i<=10) {
    console.log(i);
    i++;
};
*/


/* Ejercicio 2
Ahora queremos que nos muestre
solamente los números impares. */

/*
var num = [1,2,3,4,5,6,7,8,9,10]
var i;
for(i = 0; i<num.length; i=i+2) {
    console.log(num[i]);
};
*/

/* Ejercicio 3
Ahora queremos que nos muestre solamente los numeros impares y que sean
divisibles por 3 */

/*
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]
i = 0;
while (i < num.length) {
    if ((num[i] % 3) == 0) {
        document.write(num[i] + '<br>');
    } i=i+2
}
*/

/*
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
for(var i=0; i<num.length; i=i+2) {
    if ((num[i] % 3) == 0) {
        console.log(num[i])
    }
} 
*/


/* Ejercicio 4
En el código construido, utiliza las
sentencias de control estudiadas para dejar de
imprimir la lista de números cuando lleguemos al
número 4 (este debe ser el último que se imprime por
pantalla). */

/*
var num = [1,2,3,4,5,6,7,8,9,10]
var i = 0;

while(i<num.length) {
   if(i == 4) {
    break;
}
console.log(num[i] + '<br>')
i++;
}
*/



// ejercicio con rafa


/* Escribe un programa que compruebe si tu numero de la loteria
de navidad ha sido premiado */

/*
var user_number = parseInt(prompt("Introduce tu numero de la loteria"));
var winner_numbers = {
    "first" : 34897,
    "second" : 45875,
    "third" : 13589,
    "fourth" : {
        "fourth1" : 66677,
        "fourth2" : 88788
    },
    "fifth" : {
        "fifth1":98004,
        "fifth2":33365,
        "fifth3":87851,
        "fifth4":48774,
        "fifth5":98756,
        "fifth6":41454,
        "fifth7":47884,
        "fifth8":98784
}
}

switch(user_number) {
    case winner_numbers.first:
    console.log("Has ganado el primer premio")
    break;
    case winner_numbers.second:
    console.log("Has ganado el segundo premio")
    break;
    case winner_numbers.third:
    console.log("Has ganado el tercer premio")
    break;
    case winner_numbers.fourth.fourth1:
    console.log("Has ganado el cuarto premio")
    break;
    case winner_numbers.fourth.fourth2:
    console.log("Has ganado el cuarto premio")
    break;
    case winner_numbers.fifth.fifth1:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth2:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth3:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth4:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth5:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth6:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth7:
    console.log("Has ganado el quinto premio")
    break;
    case winner_numbers.fifth.fifth8:
    console.log("Has ganado el quinto premio")
    break;
    default:
    var pedrea = parseInt(Math.random()*99999);
    console.log(pedrea);
    if(pedrea == user_number && pedrea !=(winner_numbers.first || winner_numbers.second ||
        winner_numbers.third || winner_numbers.fourth.fourth1 || winner_numbers.fourth.fourth2 ||
        winner_numbers.fifth.fifth1 || winner_numbers.fifth.fifth2 || winner_numbers.fifth.fifth3 ||
        winner_numbers_numbers.fifth.fifth4 || winner_numbers.fifth.fifth5 ||
        winner_numbers.fifth.fifth6 || winner_numbers.fifth.fifth7 || winner_numbers.fifth.fifth8)) {
        console.log("Has ganado mil euros")
    }
}
*/



// es un sistema que recorre elementos
// for(var i = 0; i<nums.length;i++){}
// Ejercicio con Javi

/*
while(condition_is_true) {
    do something
    i++
} 
*/

//do while

/* 
var nums = [1,2,3,4,5];
var i = 0;
do {
    do something;          o  console.log(nums[i]*2)
    i++
} while(i<nums.length);
*/

/*
var runners = ['Pedro', 'Antonio', 'Maria', 'Lucia', 'Lucas', 'Javier', 'Isabel', 'Jaime',
'Rafael', 'Carmen'];

var i;
var text = '';
for(i=0; i<5; i++) {
    text += runners[i] + '<br>';
};
document.write(text);
*/

/*
var runners = ['Pedro', 'Antonio', 'Maria', 'Lucia', 'Lucas', 'Javier', 'Isabel', 'Jaime',
'Rafael', 'Carmen'];

var i = 0;
var text = '';
while(i<5) {
    text += runners[i] + '<br>';
    i++;
}
document.write(text);
*/

/*
var runners = ['Pedro', 'Antonio', 'Maria', 'Lucia', 'Lucas', 'Javier', 'Isabel', 'Jaime',
'Rafael', 'Carmen'];

var text = '';
var i = 0;
do {
    text += runners[i] + '<br>';
    i++;
} while (i<5);
document.write(text);
*/

/*
var runners = ['Pedro', 'Antonio', 'Maria', 'Lucia', 'Lucas', 'Javier', 'Isabel', 'Jaime',
'Rafael', 'Carmen'];

var i = 0;
var text = '';
while(i<5) {
   if(i == 3) {
    break;
}
text += runners[i] + '<br>'
i++;
}
document.write(text);
*/

/*
var runners = ['Pedro', 'Antonio', 'Maria', 'Lucia', 'Lucas', 'Javier', 'Isabel', 'Jaime',
    'Rafael', 'Carmen'];

var i;
var text = ''
for (i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    text += runners[i] + '<br>';
}

document.write(text);
*/
