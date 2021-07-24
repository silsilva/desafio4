function headerComponent(el){
  const componentEl= document.createElement("div")
  componentEl.innerHTML=`<div class="ventana">
  <button class="ventana__cierra-ventan">X</button>
  <div class="ventana__contenido">
    <div class="header__vinculos">
      <a href="../portfolio/portfolio.html" class="header__label"
        >Portfolio</a
      >
      <a href="../contacto/contact.html" class="header__label">Escribime</a>
      <a href="../servicios/servicios.html" class="header__label"
        >Servicios</a
      >
    </div>
  </div>
</div>
<header class="header">
  <div class="inicio">
    <a href="../index.html"
      ><img src="../imagenes/logo.png" class="header__logo"
    /></a>
  </div>
  <div class="header__vinculo">
    <a href="../portfolio/portfolio.html" class="header__labe">Portfolio</a>
    <a href="../contacto/contact.html" class="header__labe">Escribime</a>
    <a href="../servicios/servicios.html" class="header__labe">Servicios</a>
  </div>
  <button class="abre-ventan">Menú</button>
</header>
<div class="intro" id="start">
  <div class="header-main"></div>
  <div class="body-intro">
    <h2 class="titulo">Hola</h2>
    <h3 class="titulo2">Soy Silvana</h3>
    <h3 class="titulo3">Portfolio</h3>
  </div>
</div>`;
el.appendChild(componentEl)
}







function abrirCerrarVentanas() {
  const botonAbreVentanaEl= document.querySelector(".abre-ventan");
  const botonCerrarVentanaEl= document.querySelector(".ventana__cierra-ventan");
  const ventanaEl = document.querySelector(".ventana");

  botonAbreVentanaEl.addEventListener("click", () =>{
      ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", () =>{
      ventanaEl.style.display = "";
  });
};