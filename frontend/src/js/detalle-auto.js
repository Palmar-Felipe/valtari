const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.querySelector(".main-image img");

thumbs.forEach(thumb => {

  thumb.addEventListener("click", () => {

    // Cambiar imagen principal
    mainImage.src = thumb.src;

    // Quitar active de todas
    thumbs.forEach(t => t.classList.remove("active"));

    // Agregar active a la seleccionada
    thumb.classList.add("active");

  });

});


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








const params = new URLSearchParams(window.location.search);
const id = params.get("id");



async function cargarVehiculo() {

    try {

        const respuesta = await fetch(
          `http://localhost:3000/vehiculo/${id}`
        );

        const vehiculo = await respuesta.json();



      

        

        document.getElementById("btnWhatsapp").href = urlWhatsapp;

        document.getElementById("descripcionVehiculo").textContent =
            vehiculo.descripcion;

        document.getElementById("featuresGrid").innerHTML = `
            <div class="feature-item">
                <div class="icon-circle">
                    <i class="fa-solid fa-palette"></i>
                </div>
                <p>Color: <strong>${vehiculo.color}</strong></p>
            </div>

            <div class="feature-item">
                <div class="icon-circle">
                    <i class="fa-solid fa-car-side"></i>
                </div>
                <p>Puertas: <strong>${vehiculo.puertas}</strong></p>
            </div>

            <div class="feature-item">
                <div class="icon-circle">
                    <i class="fa-solid fa-gas-pump"></i>
                </div>
                <p>Combustible: <strong>${vehiculo.combustible}</strong></p>
            </div>

            <div class="feature-item">
                <div class="icon-circle">
                    <i class="fa-solid fa-engine"></i>
                </div>
                <p>Motor: <strong>${vehiculo.motor}</strong></p>
            </div>

            <div class="feature-item">
                <div class="icon-circle">
                    <i class="fa-solid fa-gears"></i>
                </div>
                <p>Transmisión: <strong>${vehiculo.transmision}</strong></p>
            </div>
        `;

    } catch(error) {

        console.error(error);

    }

}

const gallery = document.getElementById("gallery");
const imagenPrincipal = document.getElementById("imagenPrincipal");

async function cargarImagenes() {

    try {

        const respuesta = await fetch(
            `http://localhost:3000/vehiculos/${id}/imagenes`
        );

        const imagenes = await respuesta.json();

        gallery.innerHTML = "";

        imagenes.forEach((img, index) => {

            gallery.innerHTML += `
                <img
                    src="../img/${img.imagen}"
                    class="thumb ${index === 0 ? "active" : ""}"
                    alt=""
                >
            `;

        });

        if(imagenes.length > 0){

            imagenPrincipal.src = `../img/${imagenes[0].imagen}`;

        }

        activarGaleria();

    } catch(error){

        console.error(error);

    }

}

function activarGaleria() {

    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(thumb => {

        thumb.addEventListener("click", () => {

            imagenPrincipal.src = thumb.src;

            thumbs.forEach(t =>
                t.classList.remove("active")
            );

            thumb.classList.add("active");

        });

    });

}

cargarVehiculo();
cargarImagenes();
