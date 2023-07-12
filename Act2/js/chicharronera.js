function chicharronera(a,b,c,opcion){
    console.log("Selecciona una opción");
    switch(opcion){
        case "+":
            let multi=4*a*c;
            let cuadrado=b**2;
            let raiz =Math.sqrt(Math.abs(cuadrado-multi));
            let suma = -b + raiz;
            let res= suma/(2*a);
            console.log("El resultado es: ",res);
        break;
        case "-":
            let res1 = (-b-(Math.sqrt(Math.abs((b**2)-(4*a*c)))))/(2*a);
            console.log("El resultado es: ",res1);
            break;
        case "+-":
            let res2 = (-b+(Math.sqrt(Math.abs((b**2)-(4*a*c)))))/(2*a);
            console.log("El resultado es: ",res2);
            let res3 = (-b-(Math.sqrt(Math.abs((b**2)-(4*a*c)))))/(2*a);
            console.log("El resultado es: ",res3);
            break;
    } 
}//chicharronera
