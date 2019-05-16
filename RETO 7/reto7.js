/* 
- 8 caracteres o mas
- Letra 1 mayuscula
- Contenga un numero
*/

/*
function passwordCheck(pass) {
    var isValid = false;
    var password_length = pass.length >= 8;
    var upper_case = pass.charCodeAt(0) >= 65 && pass.charCodeAt(0) <= 90;
    if (password_length && upper_case) {
        for (var i = 0; i < pass.length; i++) {
            if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                isValid = true;
                break;
            };
        };
    };
    return isValid;
};

var user_password = prompt('Escribe la contraseña para validarla');

if (passwordCheck(user_password)) {
    console.log('La contraseña es seguro');
} else {
    console.log('La contraseña no es seguro');
};
*/

/*
- Escribe una función que valide el e-mail del usuario
pista(tiene que contener mínimo una arroba y un punto)
- En vez de devolver true o false devuelve el motivo del fallo 
si lo hubiera en la funcion checkpassword 
*/

/*
function checkMail(mail) {
    var isArroba = false;
    var isDot = false
    for (var i = 0; i < mail.length; i++) {
        if (mail.charCodeAt(i) === 64) isArroba = true;
        if (mail.charCodeAt(i) === 46) isDot = true;
    }
    if (isArroba && isDot) {
        return true;
    } else {
        return false
    }
}

var email = prompt('Introduce tu correo')

if(checkMail(email)) {
    console.log('El correo es valido')
} else {
    console.log('El correo es invalido')
}
*/

// Clase con Javi

/*

clase -> persona ->
altura
color de ojos
peso
color de pelo
brazos
piernas
color de piel
manos
boca
dientes

metodo ->
ver
caminar
oler
respirar
comer
correr
beber
nadar
hablar

*/


/*
class Poligono {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
    get area () {
        return this.calcArea();
    }
    calcArea () {
        return this.height * this.width;
    };
};

var cuadrado = new Poligono (10, 10);

console.log(cuadrado.width);
*/

/*
class Punto {
    constructor ( x, y) {
        this.x = x;
        this.y = y;
    }
    static distancia (a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx+dy*dy);
    }
}

const p1 = new Punto(5,5);
const p2 = new Punto(10,10);

console.log(Punto.distancia(p1, p2));
*/

// RETOS

/*
Crea una clase "Persona" definida a traves de sus caracteristicas fisicas, y haz
que se pueda calcular el IMC de cualquier persona que se haya creado
como un objeto de la clase
*/
/* con metodo static conversar
- 2 personas
- > 10 años
*/

/*
class Persona {
    constructor(height, weight, age, complete_name, hair_color, skin_color, language, hobby) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.complete_name = complete_name;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.language = language;
        this.hobby = hobby;
    }
    get imc() {
        return this.calcImc()
    }
    static conver(person1, person2) {
        var canTalk = false

        if (Math.abs(person1.age - person2.age) <= 10) {
            canTalk = true
        }
        return canTalk
    }
    calcImc() {
        return this.weight / (this.height * this.height) * 10000
    }
}

var persona1 = new Persona(175, 75, 24, 'Javier Machado', 'Negro', 'Claro', 'Español', 'Futbol')
console.log(persona1)

var persona2 = new Persona(170, 71, 33, 'Luka Modric', 'Amarillo', 'Claro', 'Croata', 'Futbol')
console.log(persona2)

console.log('Pueden hablar ' + persona1.complete_name + ' y ' + persona2.complete_name + '? ' + Persona.conver(persona1.age, persona2.age))

console.log(persona1.imc)
console.log(persona2.imc)
*/

class Coche {
    constructor(marca, color, piloto, puertas, peso, caballos) {
        this.marca = marca;
        this.color = color;
        this.piloto = piloto
        this.puertas = puertas;
        this.peso = peso;
        this.caballos = caballos;
    }
    get velocity() {
        return this.calcVelocity()
    }
    calcVelocity() {
        return (this.caballos / this.peso * 1000).toFixed(0);
    }
    static compare(car_1, car_2) {
        if (car_1.velocity > car_2.velocity) {
            console.log('Ha ganado '+car_1.piloto);
        } else {
            console.log('Ha ganado '+car_2.piloto);
        };
    };
};

var car1 = new Coche('Ferrari', 'Rojo', 'Sebastian Vettel', 'Dos puertas', 1110, 600);
var car2 = new Coche('McLaren', 'Gris', 'Fernando Alonso', 'Dos puertas', 1120, 580);
var car3 = new Coche('Mercedes', 'Gris', 'Lewis Hamilton', 'Dos puertas', 1142, 635);

console.log(car1.velocity+' kmh');
console.log(car2.velocity+' kmh');
console.log(car3.velocity+' kmh');

Coche.compare(car1, car2);
Coche.compare(car1, car3);
Coche.compare(car2, car3);



