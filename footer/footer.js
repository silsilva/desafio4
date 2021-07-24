function footerComponent(el){
    const componentEl= document.createElement("div")
    componentEl.innerHTML=

` <div class="footer">
<div class="contenedor-footer">
  <img class="logo2" src="./imagenes/logo.png" />
  <img class="logon" src="./imagenes/logon.png" />
  </div>
  
  <div class="contenedor-footer2">
  <h3 class="seguinos">Seguinos</h3>
  <div class="redes">
  <a href="https://www.instagram.com"
  ><img src="./imagenes/instagram.png" class="imagen-red"
  /></a>
  <a href="https://www.github.com"
  ><img src="./imagenes/github.png" class="imagen-red"
  /></a>
  <a href="https://www.linkedin.com"
  ><img src="./imagenes/linkedin.png" class="imagen-red"
  /></a>
  </div>
  <h3 class="contactanos">Contactanos</h3>
  
</div>
</div>`;
el.appendChild(componentEl)
    
    }