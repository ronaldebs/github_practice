/*
class Team {
    constructor(name, motivation, level) {
        this.name = name;
        this.motivation = motivation;
        this.level = level;
    }
    play(team) {
        var media_rival = ((team.motivation * 2 + team.level) / 3).toFixed(2);
        var media = ((this.motivation * 2 + this.level) / 3).toFixed(2);
        if (media_rival > media) {
            document.write("Gana <strong>" + team.name + "</strong> "
                + media_rival + " El equipo rival tiene " + media + "<br>");
        } else {
            document.write("Gana <strong>" + this.name + "</strong> "
                + media + " El equipo rival tiene " + media_rival + "<br>");
        }
    }
}

var i = 0
while (i <= 20) {
    i++;
    var equipo_1 = new Team('Equipo local', Math.random() * 100, Math.random() * 100);
    var equipo_2 = new Team('Equipo visitante', Math.random() * 100, Math.random() * 100);
    equipo_1.play(equipo_2);
}
*/

// clase con Javi ECMASCRIPT 6

/*
function printer(elem) {
    console.log(elem)
}
printer('Javier Machado')


printer = (elem) => {console.log(elem)}
printer('Javier Machado')


if (true) {
    let x = 'hola mundo';
    console.log(x)
}
*/

/*
let nombre1 = 'Javascript';
let nombre2 = 'awesome';

console.log(`I just wanna say ${nombre1} is ${nombre2}`);
*/

/*
var [a, b] = ['hello', 'world'];
console.log(a);
console.log(b);


var person = {name: 'Javier', surname: 'Machado'};
var {name, surname} = person;
console.log(surname);
*/

/* Crea una funcion que imprima siempre lo que se le pasa por parametro, y si no se le pasa ningun
parametro, informe de esta situacion*/

/*
mat = (operation, a, b) => {
    if (operation == 'sum') {
        console.log(a + b)
    } else {
        console.log('No existe esta operacion')
    }
}
mat('sum', 30, 6)
*/

printer = (team) => {
    if(team) {
        console.log(team)
    } else {
        console.log('No me has pasado nada')
    }
}
    
printer('Liverpool [4] - Barcelona [0]')

printer()

/*Basandote en ECMASCRIPT 6, que elementos cambiarias de la siguiente funcion o como la
reescribirias

function multiply(x,y) {
    return x*y;
}
*/

/*
multiply = (x, y) => { console.log(x * y) }

multiply(10, 5);
*/