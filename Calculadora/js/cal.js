let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnResta = document.getElementById("btnResta");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnSuma = document.getElementById("btnSuma");
let btn0 = document.getElementById("btn0");
let btnPunto = document.getElementById("btnPunto");
let btnDivision = document.getElementById("btnDivision");
let btnIgual = document.getElementById("btnIgual");
let btnBorrar = document.getElementById("btnBorrar");
let textito = document.getElementById("textito");
let datitos = document.getElementById("datitos");

let operacion= 0;
let a;
let b;


btn1.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn1.innerHTML;
}); //boton 1


btn2.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn2.innerHTML;
}); //boton 2

btn3.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn3.innerHTML;
}); //boton 3

btn4.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn4.innerHTML;
}); //boton 4

btn5.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn5.innerHTML;
}); //boton 5

btn6.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn6.innerHTML;
}); //boton 6

btn7.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn7.innerHTML;
}); //boton 7

btn8.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn8.innerHTML;
}); //boton 8

btn9.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn9.innerHTML;
}); //boton 9

btn0.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btn0.innerHTML;
}); //boton cero

btnPunto.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value + btnPunto.innerHTML;
}); //boton punto


btnBorrar.addEventListener("click",function(event){
    event.preventDefault();
    textito.value="";
    operacion=0;
    console.clear();
    datitos.value="";
}); //boton borrar


btnSuma.addEventListener("click",function(event){
    event.preventDefault();
    a = textito.value;
    operacion = "+";
    limpiar();
}); //boton suma

btnResta.addEventListener("click",function(event){
    a = textito.value;
    operacion = "-";
    limpiar();
}); //boton resta

btnMultiplicacion.addEventListener("click",function(event){
    a = textito.value;
    operacion = "*";
    limpiar();
}); //boton multi

btnDivision.addEventListener("click",function(event){
    a = textito.value;
    operacion = "/";
    limpiar();
}); //boton division

btnIgual.addEventListener("click",function(event){
    event.preventDefault();
    b = textito.value;
    resolver();
}); //boton Igual


function limpiar(){
    textito.value = "";
}

function resolver(){
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            res = parseFloat(a) / parseFloat(b);
            break;
        default:
            break;
    }

    textito.value = res;
    console.log(res);
}

function resetear(){
    a=0;
    b=0;
    operacion= "";
}
