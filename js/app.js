const tarjetas = document.querySelector(".cards");
const contenedor = document.getElementById("detalle");

/* Mostrar contenido al hacer clic en una tarjeta */
function mostrar(id) {
  fetch("contenido.json")
    .then(response => response.json())
    .then(data => {
      const item = data[id];

      let imagenHTML = "";

      if (id === "bloque1") {
        imagenHTML = `<img src="img/bloque1.jpg" alt="Transiciones emocionales" class="img-seccion">`;
      }

      if (id === "bloque2") {
        imagenHTML = `<img src="img/bloque2.jpg" alt="Estimulación oportuna" class="img-seccion">`;
      }

      if (id === "bloque3") {
        imagenHTML = `<img src="img/bloque3.jpg" alt="Transiciones seguras" class="img-seccion">`;
      }

      contenedor.innerHTML = `
        <div class="detalle-contenido">
          <h3>${item.icono} ${item.titulo}</h3>

          <div class="detalle-grid">
            ${imagenHTML}
            <p>${item.texto}</p>
          </div>

          <button class="btn volver" onclick="volver()">Volver a las tarjetas</button>
        </div>
      `;

      tarjetas.style.display = "none";
      contenedor.style.display = "block";

      contenedor.scrollIntoView({ behavior: "smooth" });
    })
    .catch(error => {
      contenedor.innerHTML = "<p>Error al cargar el contenido.</p>";
      console.error("Error:", error);
    });
}

/* Volver a mostrar las tarjetas */
function volver() {
  contenedor.style.display = "none";
  tarjetas.style.display = "grid";

  tarjetas.scrollIntoView({ behavior: "smooth" });
}
