let datos = {};
let datosCargados = false;

/* ==========================
   CARGA DEL CONTENIDO JSON
========================== */
fetch("./data/contenido.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar contenido.json");
    }
    return response.json();
  })
  .then(json => {
    datos = json;
    datosCargados = true;
  })
  .catch(error => {
    console.error("Error cargando el contenido:", error);
  });

/* ==========================
   MOSTRAR CONTENIDO
========================== */
function mostrar(bloque) {
  if (!datosCargados) {
    alert("El contenido aún se está cargando, intenta nuevamente.");
    return;
  }

  const contenido = datos[bloque];
  if (!contenido) {
    console.error("Bloque no encontrado:", bloque);
    return;
  }

  const detalle = document.getElementById("detalle");
  const seccionContenido = document.getElementById("contenido");

  // Reiniciar animación
  detalle.classList.remove("animado");

  // Inyectar contenido
  detalle.innerHTML = `
    <div class="detalle-header">
      <span class="icono">${contenido.icono}</span>
      <h2>${contenido.titulo}</h2>
    </div>

    <p>${contenido.texto}</p>

    <button class="volver" id="btnVolver">⬅ Volver a las tarjetas</button>
  `;

  // Mostrar sección
  seccionContenido.classList.remove("hidden");

  // Esperar render + animar + bajar
  setTimeout(() => {
    detalle.classList.add("animado");
    seccionContenido.scrollIntoView({ behavior: "smooth" });
  }, 50);

  // Conectar botón volver
  const btnVolver = document.getElementById("btnVolver");
  btnVolver.addEventListener("click", volver);
}

/* ==========================
   VOLVER AL TARJETERO
========================== */
function volver() {
  const seccionContenido = document.getElementById("contenido");
  const seccionUnidad = document.getElementById("unidad");

  // Ocultar contenido
  seccionContenido.classList.add("hidden");

  // Esperar recalculo del layout y subir
  setTimeout(() => {
    seccionUnidad.scrollIntoView({ behavior: "smooth" });
  }, 50);
}
