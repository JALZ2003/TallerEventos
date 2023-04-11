function calcularImc() {
    let estatura = document.getElementById("estatura").value/100; 
    let peso = document.getElementById("peso").value;

    let imc = peso / (estatura*estatura);
    let resultado= document.getElementById("resultado").value= imc.toFixed(2);
    
}

