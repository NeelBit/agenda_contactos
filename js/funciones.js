const guardarContacto = (db, contacto) => {
    /* convierte el object a string, y almacena en db */
    db.setItem(contacto.id, JSON.stringify(contacto));

    /* limpiar input - redireccionando (recargando pag.)*/
    window.location.href = "/";
}

const cargarContactos = (db, parentNode) => {
    /* obtener contactos de los db */
    /* array con todas las keys de la db */
    let keys = Object.keys(db);
    /* console.log(keys); */

    /* recorrer array de claves para */
    for (const key of keys) {
        /* let contacto = db.getItem(key); */
        /* console.log(contacto); */

        /* pasar string json a object */
        let contacto = JSON.parse(db.getItem(key));

        // ya se puede acceder a cada elemento:
        /* console.log(contacto.numero); */

        /* crear lista por cada key creada */
        crearContacto(parentNode, contacto, db);
    }
}

const crearContacto = (parentNode, contacto, db) => {
    /* div .lista */
    let divContacto = document.createElement("DIV");
    /* h3 hijos de .lista */
    let nombreContacto = document.createElement("H3");
    let numeroContacto = document.createElement("H3");
    let correoContacto = document.createElement("P");
    let detallesContacto = document.createElement("P");
    /* iconos */
    let btnEditar = document.createElement("BUTTON");
    let btnBorrar = document.createElement("BUTTON");
    /* span de los btn */
    let spanBtnEditText = document.createElement("SPAN");
    let spanBtnEditIcon = document.createElement("SPAN");

    let spanBtnDeleteText = document.createElement("SPAN");
    let spanBtnDeleteIcon = document.createElement("SPAN");

    /* clases */
    btnEditar.classList.add("btn-lista", "btn-edit", "noselect");
    btnBorrar.classList.add("btn-lista", "btn-delete", "noselect");

    spanBtnEditText.classList.add("text");
    spanBtnEditIcon.classList.add("icon", "material-icons");

    spanBtnDeleteText.classList.add("text");
    spanBtnDeleteIcon.classList.add("icon", "material-icons");

    /* contenido */
    spanBtnEditText.innerHTML = "Editar";
    spanBtnEditIcon.innerHTML = "edit";

    spanBtnDeleteText.innerHTML = "Borrar";
    spanBtnDeleteIcon.innerHTML = "delete";

    /* hijos */
    btnEditar.appendChild(spanBtnEditText);
    btnEditar.appendChild(spanBtnEditIcon);

    btnBorrar.appendChild(spanBtnDeleteText);
    btnBorrar.appendChild(spanBtnDeleteIcon);


    /*  */
    divContacto.className = "lista";

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    correoContacto.innerHTML = contacto.correo;
    detallesContacto.innerHTML = contacto.detalles;

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(correoContacto);
    divContacto.appendChild(detallesContacto);
    divContacto.appendChild(btnEditar);
    divContacto.appendChild(btnBorrar);

    /* funcionalidad a btnBorrar  y btnEditar*/
    btnBorrar.onclick = () => {
        db.removeItem(contacto.id);
        window.location.href = "/";
        alert("Borraste al id: " + contacto.id);
    };

    btnEditar.onclick = () => {
        /* cargar los input con los datos*/
        let nombre = document.querySelector("#nombre");
        let numero = document.querySelector("#numero");
        let correo = document.querySelector("#email");
        let detalles = document.querySelector("#detalles");

        nombre.value = contacto.nombre;
        numero.value = contacto.numero;
        correo.value = contacto.correo;
        detalles.value = contacto.detalles;

        db.removeItem(contacto.id);
    }

    parentNode.appendChild(divContacto);
}