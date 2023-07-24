//Declarar un array

// let meses=new Array("");

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// meses[2] = "March";
// console.log(meses[0]);
// console.log(meses[1]);
// console.log(meses[2]);
// console.log(meses[11]);

// meses[12]="January";
// console.log(meses[12]);

console.log(meses.length);

let ultimo =meses.pop();
console.log(ultimo);//Diciembre
console.log(meses.length);//11
ultimo =meses.pop(); //Saca el ultimo elemento de la lista
console.log(ultimo);//Noviembre
console.log(meses.length);//10
console.log(meses.push("November"));//11 //Agrega un elemento al final del array
console.log(meses[10]);

console.log(meses.unshift("December")); //12 //Agrega un elemento al inicio de la lista
console.log(meses[0]);

console.log(meses);
console.log(meses.shift()); //elimina el primer elemento de la lista
//
console.log(meses);



//last indexof de derecha a izquierda


