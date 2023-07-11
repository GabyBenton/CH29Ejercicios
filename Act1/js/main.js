console.log("Ejercicio uno:")
function calculoCosto(costo){
    let costoMasFee = costo + 3;
    return(costoMasFee * 1.01);
}//Costo mas fees e intereses
console.log("El costo más el fee y los intereses es de:", calculoCosto(20));

console.log("Ejercicio dos, parte 1:")
function holaAmigos(nombre1, nombre2, nombre3){
    return("Hola: "+nombre1+","+" "+nombre2+","+" "+nombre3);  
}//Saludo a amigos
console.log(holaAmigos("Adri", "Diego", "Julieta"));

console.log("Ejercicio 2 parte 2:")
let fecha = new Date;
function age(yearOfBirth){
    return(fecha.getFullYear() - yearOfBirth);
}//Anho de nacimiento
console.log("Tu edad es de:", age(1994));

console.log("Ejercicio 2 parte 3:")
function bienvenidaCompleta(nombre1, edad1, nombre2, edad2, nombre3, edad3){
    return("Bienvenid@"+" "+nombre1+", tu edad es de: "+edad1+"."+" Bienvenid@"+" "+nombre2+", tu edad es de: "+edad2+"."+" Bienvenid@"+" "+nombre3+", tu edad es de: "+edad3+".")
}//Bienvenida completa
console.log(bienvenidaCompleta("Adri", 78, "Diego", 18, "Julieta", 32));