function calcular219() {
    let min =parseFloat (document.getElementById("min").value);
    let costo =parseFloat (document.getElementById("costo").value);
    const pagar=costo*min;
    document.getElementById("pagar").textContent = "Costo de la llamada :" + pagar;


}
