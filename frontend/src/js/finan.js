const body = document.body;

const hbtn = document.getElementById("hbtn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");


/* =========================================
   ABRIR MENÚ
========================================= */

function openMenu() {

    body.classList.add("menu-open");

}


/* =========================================
   CERRAR MENÚ
========================================= */

function closeMenu() {

    body.classList.remove("menu-open");

}


/* =========================================
   BOTÓN MENÚ
========================================= */

hbtn.addEventListener("click", () => {

    if (body.classList.contains("menu-open")) {

        closeMenu();

    } else {

        openMenu();

    }

});


/* =========================================
   CERRAR
========================================= */

closeBtn.addEventListener(
    "click",
    closeMenu
);


overlay.addEventListener(
    "click",
    closeMenu
);


/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    }
);


/* =========================================
   SUBMENÚS
========================================= */

document
    .querySelectorAll(".nav-item[data-sub]")
    .forEach(item => {

        item.addEventListener("click", () => {

            const subId =
                item.getAttribute("data-sub");

            const sub =
                document.getElementById(subId);

            const chevron =
                item.querySelector(".chevron");

            const isOpen =
                sub.classList.contains("open");


            document
                .querySelectorAll(".sub-items")
                .forEach(s =>
                    s.classList.remove("open")
                );


            document
                .querySelectorAll(".chevron")
                .forEach(c =>
                    c.style.transform = ""
                );


            if (!isOpen) {

                sub.classList.add("open");

                chevron.style.transform =
                    "rotate(90deg)";

            }

        });

    });