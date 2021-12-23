/* variables */
const nombre = document.querySelector("#nombre");
const numero = document.querySelector("#numero");
const correo = document.querySelector("#email");
const detalles = document.querySelector("#detalles");
const btn_guardar = document.querySelector("#btn-guardar");

const listado = document.querySelector(".listado");

/* local storage */
const db = window.localStorage;

btn_guardar.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        /* hash object: global variable */
        nombre: nombre.value,
        numero: numero.value,
        correo: correo.value,
        detalles: detalles.value
    }

    /* console.log(contacto.id); */
    guardarContacto(db, contacto);
}

cargarContactos(db, listado);