function addWorkCard(params = {}){
    const template = document.querySelector("#servicio-card-template");
    const container =  document.querySelector(".servicio-content");

    template.content.querySelector(".servicio-card-title").textContent = params.title;
    template.content.querySelector(".servicio-card-text").textContent = params.description;
    template.content.querySelector(".servicio-img").src = params.imagen;
    ;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/domtj3yma899/environments/master/entries?access_token=aQAzU_rJfX6p0F9jUNWye-twN_EG2Wbbe-THxBg8vWk&&content_type=misServicios")
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{ 
   const fieldsCollections = data.items.map(function(item) {
       const objeto = {
           title: item.fields.titulo,
           description: item.fields.descripcion,
           
           image: item.fields.imagen.sys.id,
           includes: data.includes.Asset,
       };
   
    return objeto;
    });
    
fieldsCollections.forEach((x) =>{
    let idEncontrado = buscarAsset(x.image, x.includes);
    x.imagen = "https:" + idEncontrado.fields.file.url;
});
return fieldsCollections;

});
function buscarAsset(assetID, includes){
    const encontrado = includes.find((inc)=> {
        return inc.sys.id == assetID;
    });
    return encontrado;
}
}
function main(){
    
 getWorks().then(function(works){
    
      for(const w of works){
          addWorkCard(w);
     }
     headerComponent(document.querySelector(".header-main"))
    abrirCerrarVentanas();
     footerComponent(document.querySelector(".footer-container"))
 });
}

main();