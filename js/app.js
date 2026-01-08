let datos = {};

fetch("./data/contenido.json")
  .then(res => res.json())
  .then(json => datos = json);

function mostrar(bloque) {
  const contenido = datos[bloque];
  const detalle = document.getElementById("detalle");

  detalle.classList.remove("animado"); // reinicia animación

  detalle.innerHTML = `
    <div class="detalle-header">
      <span class="icono">${contenido.icono}</span>
      <h2>${contenido.titulo}</h2>
    </div>
    <p>${contenido.texto}</p>

    <button class="volver" onclick="volver()">⬅ Volver a las tarjetas</button>
  `;

  document.getElementById("contenido").classList.remove("hidden");

  // fuerza reflow para que la animación se reinicie bien
  void detalle.offsetWidth;

  detalle.classList.add("animado");

  // 🔽 baja automáticamente al contenido
  scrollToSection("contenido");
}

}

function volver() {
  document.getElementById("contenido").classList.add("hidden");
  scrollToSection("unidad");
}

