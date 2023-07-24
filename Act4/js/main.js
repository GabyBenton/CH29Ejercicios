
/*Mayusculas solo toma el inicio */
let regex = /[A-Z]{4}/;
let rfc= 'XAXX';
console.log(regex.test(rfc));

/*Numeros*/
let regex1 = /[0-9]{6}/;
let rfc1= '101010';
console.log(regex1.test(rfc1));

/*Combinacion */

regex =/[A-Z0-9]{3}/;
rfc="A_A"
console.log(regex.test(rfc));


/*final*/
/*
regex=/^[A-Z]{4}[0-9]{6}[0-9A-Z]{3}$/;
^ marca con lo que debe iniciar
$ marca el final de lo que debe llevar
*/
regex=/[A-Z]{4}[0-9]{6}[0-9A-Z]{3}/;
rfc="AABA991104KIA";
console.log(regex.test(rfc));


let regextel = /^[0-9]{10}$/;
let tel="5559576269";
console.log(regextel.test(tel));

let regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email="jdoe@yahoo.com";
console.log(email,regexEmail.test(email));