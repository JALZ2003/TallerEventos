function convertir(imput){
const tasa=4559.25;
if (imput==="dolar") {
    let dolar=document.getElementById("dolar").value;
    let convertirAPesos= dolar*tasa;

    document.getElementById("peso").value=convertirAPesos.toFixed(2);

}else{
    const peso= document.getElementById("peso").value;
    let convertirADolar= peso/tasa;
    document.getElementById("dolar").value=convertirADolar.toFixed(2);
}




}

