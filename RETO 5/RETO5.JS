//Ejercicio con Rafa

/*
var stock_songs = [
    {
        'artist': 'AC/DC',
        'song': 'thunderstruck',
        'price': 1.99,
        'duration': 3.40
    },
    {
        'artist': 'The Cure',
        'song': 'Friday i`m in love',
        'price': 25,
        'duration': 3.10
    },
    {
        'artist': 'Rammstein',
        'song': 'Du hast',
        'price': 2,
        'duration': 355
    },
    {
        'artist': 'Anuel',
        'song': 'Secreto',
        'price': 3.99,
        'duration': 2.40
    },
    {
        'artist': 'Mana',
        'song': 'Rayando el sol',
        'price': 4.99,
        'duration': 4
    }

];

var user_song = prompt('Escribe el titulo de la cancion para saber si esta en Stock');
var stock = false;

for (var i = 0; i < stock_songs.length; i++) {
    if (user_song === stock_songs[i].song) {
        stock = true;
        break;
    }
}

if (stock) {
    console.log('La cancion ' + user_song + ' ha sido encontrado y es del artista '
        + stock_songs[i].artist + ', tiene un precio de ' + stock_songs[i].price);
} else {
    console.log('La cancion ' + user_song + ' no ha sido encontrada');
}
*/


// Ejercicios con Javi

// Ejercicio 1

/*
var parag1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nunc quam, nec dictum erat feugiat vitae.';

var parag2 = 'Curabitur dignissim nisi a est vulputate tristique. Curabitur maximus erat leo, sit amet facilisis est egestas sed.';

var parag3 = 'Morbi aliquam, ipsum eget volutpat blandit, lectus odio condimentum dui, eget dictum quam ipsum sit amet nulla.';

document.write(parag1.italics()+'<p>'+parag2.strike()+'<p>'+parag3.bold());
*/

// Ejercicio 2

/*
Realizar un sistema condicional que dado
un importe neto de un producto calcule su importe
bruto. Para ello hay que tener en cuenta lo siguiente:

- Si el producto ha sido comprado en España:

- Si el precio es mayor o igual a 2000 € se le
aplica un 16%.

- Si el precio es menor se le aplica el 10%.

- Si el producto se ha traído de fuera:
A los impuestos arriba descritos hay que
añadirle un 10% de aduanas.
*/

/*
var net_amount = 3000;
var country = 'Rusia';

if (net_amount >= 2000 && country === 'Spain') {
    console.log(net_amount*0.16+net_amount)
} else if(net_amount<2000 && country === 'Spain') {
    console.log(net_amount*0.10+net_amount);
} else {
    if (net_amount >= 2000) {
        console.log(net_amount*0.26+net_amount); 
 
    } else
    console.log(net_amount*0.20+net_amount);
};
*/

/*
Ejercicio 3
Utilizando la estructura iterativa (tipo de
bucle) que consideréis mejor, calculad la suma de los
cuadrados de los 100 primeros números.
*/

/*
var result = Number(0);

for(var i = 1; i<=100; i++){
    result += i**2;
}
console.log(result);
*/

/*
Ejercicio 4
RETO 4: Dada la siguiente lista de libros:
Ready player one
El nombre del viento
El temor de un hombre sabio
Cien años de soledad
Origen
Imprímelos por pantalla y entre corchetes el número
de letras que contiene su nombre (ej.: Origen [6] ).
Además, debes poner el que sea más largo en
negrita.
*/


var books = ['Ready player one', 'El nombre del viento', 'El temor de un hombre sabio',
'Cien años de soledad', 'Origen'];

var bigger = 0; 

for(var i = 0; i<books.length; i++) {
    if (books[i].length > bigger) {
        bigger = books[i].length
    }
}



for(var i = 0; i<books.length; i++) {
    if (books[i].length === bigger) {
        document.write("<strong>" + books[i] + " [" + books[i].length + "]" + "</strong><br>")
    } else {
        document.write(books[i] + " [" + books[i].length + "]" + "<br>")
    }
}
