
/*Promesa dentro de otra promesa*/
function getData(){
   let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
   });
   promesa.then( (response)=>{
        response.json().then((data)=>{
            createCards(data);
        }).catch((error)=>{
            console.log("Problema en el json")
        });
   })
   .catch((error)=>{
        console.error(error, "Ocurrió un error en la solicitud");
   });
}//getData

getData();

function createCards(data){
    data.forEach(producto => {
        console.log(producto.id, producto.title);
        let titulo = `${producto.title}`
        let newtitle= titulo.slice(0,20);
        let card = `<div class="col">
        <div class="card">
            <img src="${producto.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${newtitle}</h5>
              <p class="card-text">${producto.price}</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${producto.id}">More ifo</a>
            </div>
          </div>
    </div>`;

      let modal =`
      <div class="modal" tabindex="-1" id=${producto.id}>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Descripcion</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>${producto.description}</p>
                <p>Categoría: ${producto.category}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
      </div>
      `;
      document.getElementsByClassName("row")[0].insertAdjacentHTML("afterbegin",card);
      document
      .getElementsByClassName("row")[0]
      .insertAdjacentHTML("beforeend", modal);
    });
}//createCards