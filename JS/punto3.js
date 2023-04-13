const contenedorDeTarjetas = document.querySelector(".contenedor");
const buscar = document.querySelector('.buscar');
const realizado = document.querySelector("#flexSwitchCheckDefault");
const titulo = document.getElementById("tituloNota");
const texto = document.getElementById("textoNota");
const guardar = document.getElementById("guardar");

let notas = [
    {
        id: 1,
        titulo: 'hacer aseo',
        texto: 'terminar aseo',
        realizada: false,
    },
    {
        id: 2,
        titulo: 'ralizar taller',
        texto: 'terminar el taller',
        realizada: false,
    },
    {
        id: 3,
        titulo: 'praticar',
        texto: 'praticar 4 horas programacion',
        realizada: false,
    },
];

insertarTarjetas(notas);

guardar.addEventListener("click", validarCamposVacios);

realizado.addEventListener("change", () => { insertarTarjetas(filtros()) });

buscar.addEventListener("input", () => { insertarTarjetas(filtros()) });

function guardarNota() {
    let titulo = document.getElementById("tituloNota").value;
    let texto = document.getElementById("textoNota").value;
    if (validarCamposVacios(titulo, texto)) {
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
        '<input class="form-check-input" type="checkbox" id=' + id + ' onClick="marcarRealizada(id)"' + (realizado ? "checked" : "") + '>\n' +
        '<label class="form-check-label" for="inlineCheckbox1"> ' + nombre + ' </label>\n' +
        '</div>\n' + (realizado ? '<p class="card-text"><s>' + descripcion + '</s></p>\n' : '<p class="card-text">' + descripcion + '</p>\n') +
        '<button type="button" class="btn btn-danger" onClick="borrarNota(id)" id=' + id + ' > Borrar Nota </button>\n' +
        '</div>\n' +
        '</div>';
    return nota;
}

function insertarTarjetas(notas) {
    removerElementos();
    if (notas.length == 0) {
        let mensajeVacio = document.createElement("div");
        mensajeVacio.textContent = 'no hay notas para mostrar';
        contenedorDeTarjetas.appendChild(mensajeVacio);
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
    insertarTarjetas(filtros());
}

function validarCamposVacios(titulo, texto) {
    return (titulo != "") && (texto != "");
}

function removerElementos() {
    let elementos = contenedorDeTarjetas.children;
    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.remove();
        i--;
    }
}

function marcarRealizada(id) {
    let note = notas.find(n => n.id == id);
    note.realizada = (note.realizada) ? false : true;
    insertarTarjetas(filtros());
}

function borrar() {
    titulo.value = "";
    texto.value = "";
}

function filtroBuscar(list) {
    return list.filter(n => buscarPalabra(buscar.value, n));
}

function filtroRalizado(list) {
    return list.filter(n => n.realizada === true);
}

function filtros() {
    if (isRealizada()) {
        return filtroBuscar(filtroRalizado(notas));
    } else {
        return filtroBuscar(notas);
    }
}

let isRealizada = () => { return realizado.checked };

let buscarPalabra = (palabra, list) => { return palabrasMinusculas(list.titulo).includes(palabrasMinusculas(palabra)) || palabrasMinusculas(list.texto).includes(palabrasMinusculas(palabra)) };

let palabrasMinusculas = (palabra) => { return palabra.toLowerCase() };