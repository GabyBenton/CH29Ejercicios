
//inicio;condición;incremento
let suma=0;
for (let num = 0; num <=100; num++) {
    suma+=num;
}//for 
console.log(suma);

//ciclo que escriba un triangulo
let str="";
for(let ren=1;ren<=6;ren++){
    for(let col=1;col<=ren;col++){
        str+="*";
    }//for columna
    console.log(str);
    str="";
}//for renglon



//ciclo que una matriz de 2x6
let num1=1;
for(let num1=1;num1<=3;num1++){
    for(let num=1;num<=3;num++){
        console.log(num1+" "+num);
    }//for renglon
}

console.log("===============================================");

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for(let cont=0;cont<meses.length;cont++){
    console.log(meses[cont]);
}

meses.forEach(function(mes,indice){
    console.log((indice+1)+ ". "+ mes.toUpperCase());
});