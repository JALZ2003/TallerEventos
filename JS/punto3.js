
function guardarNota() {
    const idGlobal = 0;

    let titulo = document.getElementById("tituloNota").value;
    let texto = document.getElementById("textoNota").value;

    let cajaDeNotas = [];
    const nuevaNota = {
        id: idGlobal + 1,
        titulo: titulo,
        texto: texto,
        realizada: false,

    }
    cajaDeNotas.push(nuevaNota)
console.log(cajaDeNotas)
}



