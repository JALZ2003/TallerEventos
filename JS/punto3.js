const contenedorDeTarjetas = document.querySelector(".contenedor");

let notas = [];
let guardar = document.getElementById("guardar");

function guardarNota() {
    let titulo = document.getElementById("tituloNota").value;
    let texto = document.getElementById("textoNota").value;
    if (validarCamposVacios(titulo, texto)) {

        removerElementos();
        const idGlobal = obtenerIdMayor();

        const nuevaNota = {
            id: idGlobal + 1,
            titulo: titulo,
            texto: texto,
            realizada: false,

        }
        notas.push(nuevaNota)
        insertarTarjetas(notas);
    } else {
        alert("los campos están vacíos")
    }
}

function obtenerIdMayor() {
    let idMayor = 0;
    for (let i = 0; i < notas.length; i++) {
        const element = notas[i];
        if (!(idMayor > element.id)) {
            idMayor = element.id
        }
    }
    return idMayor;
}
function crearNota(nombre, descripcion, realizado, id) {
    let nota = '<div class="card text-center mb-3" style="width: 18rem;">\n' +
        '<div class="card-body">\n' +
        '<div class="form-check form-check-inline">\n' +
        '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\n' +
        '<label class="form-check-label" for="inlineCheckbox1"> ' + nombre + ' </label>\n' +
        '</div>\n' +
        '<p class="card-text">' + descripcion + '</p>\n' +
        '<button type="button" class="btn btn-danger" onClick="borrarNota(id)" id=' + id + ' > Borrar Nota </button>\n' +
        '</div>\n' +
        '</div>';
    return nota;
}

function insertarTarjetas(notas) {
    if (notas.length == 0) {
        let mensajeVacio = document.createElement("div");
        mensajeVacio.textContent = 'no hay notas para mostrar';
        contenedorDeTarjetas.appendChild(mensajeVacio);

        console.log(notas);

    } else {
        for (let i = 0; i < notas.length; i++) {
            const element = notas[i];
            let nota = crearNota(element.titulo, element.texto, element.realizada, element.id);
            contenedorDeTarjetas.innerHTML += nota;

        }
    }

}
function borrarNota(id) {
    for (let index = 0; index < notas.length; index++) {
        if (notas[index].id == id) {
            notas.splice(index, 1)
        }
    } 
    removerElementos();
    insertarTarjetas(notas);
}

insertarTarjetas(notas);

function validarCamposVacios(titulo, texto) {
    return (titulo != "") && (texto != "");
}
guardar.addEventListener("click", validarCamposVacios)
function removerElementos() {
    let elementos = contenedorDeTarjetas.children;
    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.remove();
        i--;
    }
}


