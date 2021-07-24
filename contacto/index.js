function contactComponent(el){
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <section class="contacto">
    <h2 class=" contacto__title">Contacto</h2>
    <form class="contacto__form">
      <label>
        <h3 class="contacto__label">Nombre</h3>
        <input name="nombre" type="text" />
      </label>
      <label>
        <h3 class="contacto__label">Email</h3>
        <input name="email" type="text" />
      </label>
      <label>
        <h3 class="contacto__label">Mensaje</h3>
        <textarea name="mensaje"></textarea>
      </label>
      <div class="contacto__submit-cont">
        <button class="contacto__submit-button">Enviar</button>
      </div>
    </form>
  </section>
    `;
    el.appendChild(componentEl);
}
    const form = componentEl.querySelector(".contacto__form");
    form.addEventListener("submit", function(e){
     e.preventDefault();
     const formData = new FormData(e.target);
     const objeto = Object.fromEntries(formData.entries());
     console.log(objeto);
     let url ='https://apx-api.vercel.app/api/utils/dwf';
     var data = {
      "to":"silsilva.89@gmail.com",
      "message":"mensaje a enviar"
     };
     console.log(data);

     fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
      // ...todo lo demás

    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    });
   


