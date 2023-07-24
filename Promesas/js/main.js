let data = {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}};


function getData(){
    //Se ejecut la funcion dentro de 2 segundos
    // setTimeout(()=>{console.log(data);},2000);
    //return data;
    return new Promise((resolve,reject)=>{
        if(data==null){
            reject(new Error("data no found..."))
        }//if
        setTimeout(()=>{
            resolve(data);
        },2000);
        }//resolve,reject
    );
}//getData


getData()
.then((response)=> console.log(response))
.catch((err)=> console.log(err.message));


