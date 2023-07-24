// El código va aquí -> 

let btnAgregar =document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");
let txtNombre =document.getElementById("Name");
let txtNumber =document.getElementById("Number");
let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
let alertValidacionesTexto =document.getElementById("alertValidacionesTexto");
let alertValidaciones =document.getElementById("alertValidaciones");
let tablaListaCompras = document.getElementById("tablaListaCompras");
let cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody");

let contador = 0;
let precio = 0;
let isValid = true;
let costoTotal = 0;
let totalEnProductos = 0;
let datos = new Array(); //Aqui vamos a almacenar los elementos de la tabla

btnClear.addEventListener("click",function(event){
    event.preventDefault();
    txtNumber.value="";
    txtNombre.value="";
    cuerpoTabla[0].innerHTML="";
    contadorProductos.innerText="0";
    productosTotal.innerText="0";
    precioTotal.innerText="$ 0";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    contador= 0;
    costoTotal =0;
    totalEnProductos=0;
    datos = [];
});//boton clear


function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    } //if length
    
    if(isNaN(txtNumber.value)){
        return false;
    }// if is NaN
    if(parseFloat(txtNumber.value)<=0){
        return false;
    }
    return true;
    
}//validarCantidad

function getPrecio(){
    return Math.floor(Math.random() * 50 * 100)/100;
}//get precio

btnAgregar.addEventListener("click",function(event){
    isValid = true;
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
    txtNumber.value = txtNumber.value.trim();

    if(txtNombre.value.length<3){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`El <strong>Nombre</strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid thin red";
        isValid=false;
    }//if nombre.length
    if(! validarCantidad()){
        alertValidacionesTexto.insertAdjacentHTML("afterbegin",`La <strong>Cantidad</strong> no es correcta.<br/>`);
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid thin red";
        isValid=false;
    }//if validar cantidad

    if(isValid){
        contador++;
        precio =getPrecio();
        let row = 
        `<tr>
            <td>${contador}</td>
            <td>${txtNombre.value}</td>
            <td>${txtNumber.value}</td>
            <td>${precio}</td>
        </tr>`;

        let elemento = `{"id"      :  ${contador},
                        "nombre"   : "${txtNombre.value}",
                        "cantidad" : "${txtNumber.value}",
                        "precio"   : "${precio}"}`;
        datos.push(JSON.parse(elemento));
        console.log(datos);
        localStorage.setItem("datos",JSON.stringify(datos));

        cuerpoTabla[0].insertAdjacentHTML("beforeend",row);
        contadorProductos.innerText=contador;
        costoTotal += precio * parseFloat(txtNumber.value);
        totalEnProductos += parseFloat(txtNumber.value);
        precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
        productosTotal.innerText = totalEnProductos;

        let resumen = `{ "contador": ${contador},
                        "costoTotal" : ${costoTotal},
                    "totalEnProductos": ${totalEnProductos}
        }`;

        localStorage.setItem("resumen",resumen);

        /*Se guardan los valores en string */
        // localStorage.setItem("contador",contador);
        // localStorage.setItem("costoTotal",costoTotal);
        // localStorage.setItem("totalEnProductos",totalEnProductos);
        txtNombre.value="";
        txtNumber.value="";
        txtNombre.focus();
        console.log(row);
    }//if isValid

});// boton agregar


/**/
window.addEventListener("load",function(event){
    event.preventDefault();
    if(this.localStorage.getItem("resumen")!=null){
        let res = JSON.parse(this.localStorage.getItem("resumen"));
        contador=parseInt(this.localStorage.getItem("contador"));
        costoTotal=parseFloat(this.localStorage.getItem("costoTotal"));
        totalEnProductos=parseInt(this.localStorage.getItem("totalEnProductos"));
    }
    contadorProductos.innerText=contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText= `$ ${costoTotal.toFixed(2)}`;

    if(this.localStorage.getItem("datos")!=null){
        datos = JSON.parse(this.localStorage.getItem("datos"));
        datos.forEach((r) =>{
            let row = 
                `<tr>
                    <td>${r.id}</td>
                    <td>${r.nombre}</td>
                    <td>${r.cantidad}</td>
                    <td>${r.precio}</td>
                </tr>`;
                cuerpoTabla[0].insertAdjacentHTML("beforeend",row);
        }//foreach
        );  
    }

});


