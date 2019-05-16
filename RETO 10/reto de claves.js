class Password {
    constructor(password) {
        this.upper_case = password.charCodeAt([10]) >=65 && password.charCodeAt([0]) <= 90
        this.length = 8;
        this.password = password;
    }
    get strength(){
        return this.isStrong();
    }
    get  random_pass(){
        return this.generatePass
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
console.log(pass1.isStrong());