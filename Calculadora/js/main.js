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
let resultado1 = 0;
let resultado = 0;
let num2;
let num;

btnBorrar.addEventListener("click",function(event){
    event.preventDefault();
    textito.value="";
    datitos.value="";
}); //boton borrar


btn1.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn1.innerHTML;
    datitos.value += textito.value;
}); //boton 1



btn2.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn2.innerHTML;
    datitos.value += textito.value;
}); //boton 2

btn3.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn3.innerHTML;
    datitos.value += textito.value;
}); //boton 3

btn4.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn4.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 4

btn5.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn5.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 5

btn6.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn6.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 6

btn7.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn7.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 7

btn8.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn8.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 8

btn9.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn9.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton 9

btn0.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btn0.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton cero

btnPunto.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    textito.value = btnPunto.innerHTML;
    datitos.value += textito.value;
    num = parseFloat(textito.value);
}); //boton punto

btnSuma.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    a=textito.value;
    datitos.value += "+";
    // operacion = "+";
    limpiar();
}); //boton suma

btnResta.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    a=textito.value;
    datitos.value += "-";
    // operacion = "-";
    limpiar();
}); //boton resta

btnMultiplicacion.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    a=textito.value;
    datitos.value += "*";
    // operacion = "*";
    limpiar();
}); //boton multi

btnDivision.addEventListener("click",function(event){
    event.preventDefault();
    textito.value = textito.value.trim();
    a=textito.value;
    datitos.value += "/";
    // operacion = "/";
    limpiar();
    
}); //boton division

btnIgual.addEventListener("click",function(event){
    event.preventDefault();
    // b=textito.value;
    resultado = eval(datitos.value);
    // console.log(resultado);
    textito.value = resultado;
    console.log(resultado);
    //textito.value=resultado;
}); //boton Igual


function limpiar(){
    textito.value = "";
}