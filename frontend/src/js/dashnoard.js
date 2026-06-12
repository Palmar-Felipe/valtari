
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



const reveals = document.querySelectorAll('.reveal');

function mostrarScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', mostrarScroll);





const titles = document.querySelectorAll('.reveal-title');

function mostrarTitulos() {
  const windowHeight = window.innerHeight;

  titles.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', mostrarTitulos);





const seccion = document.getElementById('seccionColor');

window.addEventListener('scroll', () => {
  const top = seccion.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight * 0.7) {
    seccion.classList.add('activa');
  } else {
    seccion.classList.remove('activa');
  }
});