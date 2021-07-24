function presentation(params = {}){
    const template = document.querySelector("#presentacion-card-template");
    const container =  document.querySelector(".presentacion-content");

    template.content.querySelector(".presentacion-card-title").textContent = params.title;
    template.content.querySelector(".presentacion-card-text").textContent = params.description;
    template.content.querySelector(".presentacion-img").src = params.imagen;
    

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/domtj3yma899/environments/master/entries?access_token=aQAzU_rJfX6p0F9jUNWye-twN_EG2Wbbe-THxBg8vWk&&content_type=presentation")
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
    
    
    
    const contact= document.querySelector(".form-container");
    contactComponent(contact);
    
    const container= document.querySelector(".footer-container");
    footerComponent(container);
    
    headerComponent(document.querySelector(".header-main"))
    abrirCerrarVentanas();
}
    
    getWorks().then(function(works){
       
         for(const w of works){
             presentation(w);
        }
    
    });
 





main();
    
  
    
    
  


