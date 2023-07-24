let encabezado=document.getElementById("encabezado");
let btnEjecutar = document.getElementById("btnEjecutar");
encabezado.innerHTML+= "- DOM"
// console.log(encabezado.innerHTML);

// let elemento = document.querySelector("ul >li");
// console.log("elemento: ",elemento);

let elementos = document.querySelectorAll("ul > li");
console.log("elementos:", elementos);

let elementos2 = document.querySelectorAll("ul > li:last-child");
console.log("elementos2:", elementos2);

let elementos3 = document.querySelectorAll("ul > li:first-child");
console.log("elementos3:", elementos3);


//Selecciona todas las etiquetas dentro de document, regresa un HTMLCollection
let listas = document.getElementsByTagName("ul");
let txtMarca = document.getElementById("txtMarca");


console.log("¿Cuantas Uls?", listas.length);
// Selecciona un elemento ul
// console.log(listas[0]);
console.log(listas.item(0));

// Trae los elementos por nombre de la clase
let listGroup = document.getElementsByClassName("list-group"); 

console.log("¿Cuantas hay en list-group?",listGroup.length);

console.log(listGroup.item(0));

btnEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    txtMarca.value = txtMarca.value.trim();
    if(txtMarca.value.length>0){
        let li= document.createElement("li");
        li.innerText=txtMarca.value;
        li.className="list-group-item";
        let li2= document.createElement("li");
        li2.innerText=txtMarca.value;
        li2.className="list-group-item";
        //append agrega al final de la lista
        //listas.item(0).append(li);
        //prepend agrega al inicio de la lista
        // listas.item(0).prepend(li);
        //listas.item(0).before(li); //agrega antes de la etiqueta ul de la lista
        listas.item(0).after(li);  //agrega elementos despues de la etiqueta ul

        /*insertAdjacentElement ubicaciones:
        beforebegin
        afterbegin
        beforeend
        afterend*/

        //Para agregar un elemento

        //listGroup.item(1).insertAdjacentElement("afterbegin",li2);
        // listGroup.item(1).insertAdjacentElement("afterend",li.cloneNode(true));
        listGroup.item(1).insertAdjacentHTML("beforeend",`<!-- Example single danger button -->
        <div class="btn-group">
          <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            ${txtMarca.value}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>`)
        //elemento adjacente, ocupa dos parametros

        txtMarca.value="";
        txtMarca.focus();
    }//if txtMarca length>0

    let elementos = document.querySelectorAll("ul > li");
    console.log("elementos:", elementos);
});

