let datos = {};

fetch("./data/contenido.json")
  .then(res => res.json())
  .then(json => datos = json);

function mostrar(bloque) {
  const contenido = datos[bloque];
  const detalle = document.getElementById("detalle");
  const seccionContenido = document.getElementById("contenido");

  detalle.classList.remove("animado");

  detalle.innerHTML = `
    <div class="detalle-header">
      <span class="icono">${contenido.icono}</span>
      <h2>${contenido.titulo}</h2>
    </div>
    <p>${contenido.texto}</p>

   <button class="volver" id="btnVolver">⬅ Volver a las tarjetas</button>

  `;

  // 1️⃣ Mostrar primero el contenido
  seccionContenido.classList.remove("hidden");

  // 2️⃣ Esperar a que el navegador lo pinte
  setTimeout(() => {
    detalle.classList.add("animado");
    seccionContenido.scrollIntoView({ behavior: "smooth" });
  }

function volver() {
  const seccionContenido = document.getElementById("contenido");
  seccionContenido.classList.add("hidden");

  document.getElementById("unidad")
    .scrollIntoView({ behavior: "smooth" });
}



