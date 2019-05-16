/*
class Army {
    constructor(name, power, n_soldiers, rage) {
        this.name = name;
        this.power = power;
        this.n_soldiers = n_soldiers;
        this.rage = rage;
    }
    get get_n_soldiers() {
        return this.n_soldiers;
    }
    set set_n_soldiers(soldiers) {
        this.n_soldiers -= soldiers;
    }
    attack() {
        return (this.power * this.rage) / this.n_soldiers;
    }
    static guantlet() {
        const probability = Math.random() * 100;
        let use_guantlet = false;
        if (probability > 95) {
            use_guantlet = true;
        }
        return use_guantlet;
    }
}

const fight = () => {
    let thanos_army = new Army('Los chitaur?', 3000, Math.random() * 5000, 80);
    let avengers_army = new Army('Avengers', 3150, Math.random() * 5000, 95);
    while (thanos_army.get_n_soldiers > 0 && avengers_army.get_n_soldiers > 0) {
        thanos_army.set_n_soldiers = avengers_army.attack();
        avengers_army.set_n_soldiers = thanos_army.attack();
        console.log(thanos_army.get_n_soldiers);
        console.log(avengers_army.get_n_soldiers);
    }
    if (thanos_army.get_n_soldiers > avengers_army.get_n_soldiers) {
        console.log('Ha ganado Thanos')
    } else {
        console.log('Ha ganado Avengers')
    }
}
fight();
*/

//Dia de retos



//function ascii_cipher(text) {
  //  for(var i = 0; i<text.length; i++ ) {
        //document.write(text[i].charCodeAt()+' ')
 //   };
//};
//ascii_cipher('Real Madrid!');



//ascii_cipher = (text) => {
   // let i = 0;
   // while(i<text.length) {
       // document.write(text[i].charCodeAt()+' ')
        //i++;
    //};
//};

//ascii_cipher('RONALD BUSTOS SOTO');



//ascii_cipher = (text) => {
    //let i = 0;
   // do {
       // document.write(text[i].charCodeAt() + ' ');
        //i++
    //} while (i < text.length);
//};

//ascii_cipher('RONALD BUSTOS SOTO'

/*class Password {
    constructor(password) {
        this.upper_case = password.charCodeAt([10]) >=65 && password.charCodeAt([0]) <= 90
        this.length = 8;
        this.password = password;
    }
    isStrong() {
        if(this.password.length >= this.length && this.upper_case){
            return true
        }else{
            return false
        }
    }
 static generatePass() {
    var caracteres = 'ABCDEFGHIJQKLMNOPQRSTUVWXYZabcdefghijqklmnopqrstuvwxyz123456789.*'
    var contraseña = "";
    for (let i=0; i<8; i++)
    contraseña = contraseña+caracteres.charAt(Math.random()*caracteres.length);
    return contraseña;
} 
}
console.log(Password.generatePass());
const pass1 = new Password (prompt("Ingrese la clave"));
console.log(pass1.isStrong());*/


class Password {
    constructor ( length = 8, password = ''){
        this.length = length
        this.password = password;
    }
    get strength(){
        return this.isStrong();

    }
    get random_pass (){
        return this.generatePass();
    }
    isStrong(){
        let uppers = false;
        let lowers = false;
        if (this.password.toUpperCase() != this.password){
            lowers = true
        }
        if (this.password.toLowerCase() != this.password){
            uppers = true
        }
        return (uppers && lowers);
    }
    generatePass(){

        let generated_pass= Array(this.length).fill('0123456789ABCDEFGHIJQKLMNOPQRSTUVWXYZabcdefghijqklmnopqrstuvwxyz').map(
            function(x){
                return x[Math.floor(Math.random() * x.length)]
            }).join('');
            this.password = generated_pass;
            return generated_pass;
    }
    
}

