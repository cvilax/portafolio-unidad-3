let datos = {};

fetch("./data/contenido.json")
  .then(res => res.json())
  .then(json => datos = json);

function mostrar(bloque) {
  const contenido = datos[bloque];
  const detalle = document.getElementById("detalle");
  detalle.innerHTML = `
    <h2>${contenido.titulo}</h2>
    <p>${contenido.texto}</p>
  `;
  document.getElementById("contenido").classList.remove("hidden");
  scrollToSection("contenido");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
