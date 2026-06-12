const body = document.body;
const hbtn = document.getElementById('hbtn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openMenu() {
  body.classList.add('menu-open');
}

function closeMenu() {
  body.classList.remove('menu-open');
}

hbtn.addEventListener('click', () => {
  body.classList.contains('menu-open') ? closeMenu() : openMenu();
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Submenús desplegables
document.querySelectorAll('.nav-item[data-sub]').forEach(item => {
  item.addEventListener('click', () => {
    const subId = item.getAttribute('data-sub');
    const sub = document.getElementById(subId);
    const chevron = item.querySelector('.chevron');
    const isOpen = sub.classList.contains('open');

    // Cerrar todos
    document.querySelectorAll('.sub-items').forEach(s => s.classList.remove('open'));
    document.querySelectorAll('.chevron').forEach(c => c.style.transform = '');

    // Abrir el clickeado si estaba cerrado
    if (!isOpen) {
      sub.classList.add('open');
      chevron.style.transform = 'rotate(90deg)';
    }
  });
});




window.addEventListener("scroll", () => {

  const hbtn = document.querySelector(".hbtn");

  if (window.scrollY > 100) {
    hbtn.classList.add("scroll-active");
  } else {
    hbtn.classList.remove("scroll-active");
  }

});

let paginaActual = 1;
const vehiculosPorPagina = 6;

async function cargarVehiculos() {
  try {

    const respuesta = await fetch(`http://localhost:3000/vehiculos/marca/${marca}/paginado?pagina=${paginaActual}&limite=${vehiculosPorPagina}`);

    const vehiculos = await respuesta.json();

    carsGrid.innerHTML = "";

    vehiculos.forEach(auto => {

      carsGrid.innerHTML += `
        <a href="detalle-auto.html?id=${auto.id}" class="car-card">

          <img src="../views/detalle-auto.html/${auto.imagen}" alt="${auto.nombre}">

            <div class="car-info">
              <h3>${auto.nombre}</h3>

              <span class="dealer">
                ${auto.marca}
              </span>

              <h2 class="price">
                $ ${Number(auto.precio).toLocaleString("es-CO")}
              </h2>

              <p class="details">
                ${auto.anio} | ${Number(auto.kilometros).toLocaleString("es-CO")} Km
              </p>

              <p class="location">
                ${auto.ciudad}
              </p>
            </div>

          </a>
          `;
    });

    return vehiculos.length;

  } catch (error) {
      console.error("Error:", error);
  }
}


const params = new URLSearchParams(window.location.search);

const marca = params.get("marca") || "Chevrolet";

const configuracionMarcas = {
  Chevrolet: {
    titulo: "Encuentra tu próximo Chevrolet",
    tag: "Chevrolet Collection 2025",
    imagen: "../img/views-catalogo-chevrolet-1/chevrolet.png"
  },

  Mazda: {
    titulo: "Encuentra tu próximo Mazda",
    tag: "Mazda Collection 2025",
    imagen: "../img/views-catalogo-chevrolet-1/chevrolet.png"
  },

  Toyota: {
    titulo: "Encuentra tu próximo Toyota",
    tag: "Toyota Collection 2025",
    imagen: "../img/views-catalogo-chevrolet-1/chevrolet.png"
  }
};

const config = configuracionMarcas[marca] || configuracionMarcas.Chevrolet;

document.getElementById("heroImagen").src = config.imagen;
document.getElementById("heroTag").textContent = config.tag;
document.getElementById("heroTitulo").textContent = config.titulo;

const carsGrid = document.getElementById("catalogo");



document.getElementById("btnSiguiente")
.addEventListener("click", async () => {

    paginaActual++;

    const cantidad = await cargarVehiculos();

    if(cantidad === 0){

        paginaActual--;

        await cargarVehiculos();

    }

});


document.getElementById("btnAnterior")
.addEventListener("click", async () => {

    if(paginaActual > 1){

        paginaActual--;

        await cargarVehiculos();

    }

});


cargarVehiculos();
