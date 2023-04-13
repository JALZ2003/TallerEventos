const contenedorDeTarjetas = document.querySelector(".contenedor");


function guardarNota() {
    removerElementos();
    const idGlobal = obtenerIdMayor();

    let titulo = document.getElementById("tituloNota").value;
    let texto = document.getElementById("textoNota").value;

    const nuevaNota = {
        id: idGlobal + 1,
        titulo: titulo,
        texto: texto,
        realizada: false,

    }
    notas.push(nuevaNota)
    insertarTarjetas(notas);
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
function crearNota(nombre, descripcion, realizado) {
    let nota = '<div class="card text-center mb-3" style="width: 18rem;">\n' +
        '<div class="card-body">\n' +
        '<div class="form-check form-check-inline">\n' +
        '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\n' +
        '<label class="form-check-label" for="inlineCheckbox1"> ' + nombre + ' </label>\n' +
        '</div>\n' +
        '<p class="card-text">' + descripcion + '</p>\n' +
        '<button type="button" class="btn btn-danger"> Borrar Nota </button>\n' +
        '</div>\n' +
        '</div>';
    return nota;
}

function insertarTarjetas(lista) {
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        let nota = crearNota(element.titulo, element.texto, element.realizada);
        contenedorDeTarjetas.innerHTML += nota;
    }
}

insertarTarjetas(notas);

function removerElementos() {
    let elementos = contenedorDeTarjetas.children;
    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.remove();
        i--;
    }
}


