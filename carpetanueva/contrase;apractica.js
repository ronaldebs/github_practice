/* 8 caracteres o mas, primera letra mayuscula,que contenga un numero*/
function passwordCheck(pass){
var isValid = false;
var password_length = pass.length >=8
var upper_case = pass.charCodeAt(0) > 65 && pass.charCodeAt && pass.charCodeAt(0) <90;
if(password_length && upper_case){
for (var i = 0; i < pass.length; i++){
if(pass.charCodeAt(i) > 48 && pass.charCodeAt(i) <= 57){
isValid = true;
break;

}
}
}
return isValid;
}
var user_password = prompt("Escribe la contrasña para saber si es valida");
if(checkPassword(user_password)){
console.log("la contraña es correcta");
}else{
    console.log("la contraña es incorrecta");
    
}


/*Escribe una funcion que valide el e-mail del usuario pista (tiene que contener una arroba y un punto) */
