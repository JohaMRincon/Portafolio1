let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function actualizarHabilidades() {
  let habilidades = [
    { clase: "javascript", porcentaje: 75 },
    { clase: "htmlcss", porcentaje: 90 },
    { clase: "java", porcentaje: 60 },
    { clase: "SQL", porcentaje: 80 },
    { clase: "python", porcentaje: 55 },
    { clase: "comunicacion", porcentaje: 95 },
    { clase: "trabajo", porcentaje: 92 },
    { clase: "atencion", porcentaje: 90 },
    { clase: "analisis", porcentaje: 95 },
    { clase: "proyect", porcentaje: 90 },
  ];

  let barras = document.getElementsByClassName("progreso");

  habilidades.forEach((habilidad, index) => {
    barras[index].style.width = habilidad.porcentaje + "%"; // Cambia el ancho de la barra
    barras[index].querySelector("span").textContent =
      habilidad.porcentaje + "%"; // Cambia el texto dentro del span
  });
}

window.addEventListener("load", actualizarHabilidades);

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  actualizarHabilidades();
};

const githubLink = document.getElementById("github-link");
const contextMenu = document.getElementById("context-menu");

githubLink.addEventListener("mouseenter", function () {
  // Posiciona el menú debajo del icono
  const rect = githubLink.getBoundingClientRect();
  contextMenu.style.top = `${rect.bottom + window.scrollY}px`;
  contextMenu.style.left = `${rect.left + window.scrollX}px`;

  // Muestra el menú
  contextMenu.style.display = "block";
});

// Ocultar el menú cuando el mouse sale del icono o del menú
githubLink.addEventListener("mouseleave", function () {
  setTimeout(() => {
    if (!contextMenu.matches(":hover")) {
      contextMenu.style.display = "none";
    }
  }, 300);
});

contextMenu.addEventListener("mouseleave", function () {
  contextMenu.style.display = "none";
});
