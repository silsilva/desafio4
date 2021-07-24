function headerComponent(el){
    const componentEl= document.createElement("div")
    componentEl.innerHTML=` <header class="header">
    <div class="inicio">
      <a href="https://www.github.com"
        ><img src="./imagenes/logo.png" class="header__logo"
      /></a>
    </div>
    <div class="header__vinculos">
    <a href="./portfolio/index.html" class="header__label">Portfolio</a>
    <a href="./contact.html" class="header__label">Escribime</a>
    <a href="./servicios/index.html" class="header__label">Servicios</a>
    </div>
    <button class="header__menu-button">Menu</button>
  </header>
  <div class="intro" id="start">
    <div class="header-main"></div>
    <div class="body-intro">
      <h2 class="titulo">Hola</h2>
      <h3 class="titulo2">Soy Silvana</h3>
    </div>
  </div>`
  el.appendChild(componentEl)
    
    }