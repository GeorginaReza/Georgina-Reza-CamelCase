function calcular210() {
    let metros =parseFloat (document.getElementById("metros").value);
    let pago = 0;
    if (metros <= 10) {
        pago = metros * 5;
    } else if (metros <= 20) {
        pago = metros * 8;
    } else {
        pago = metros * 10;
    }
    document.getElementById("resultado").textContent = "Total a pagar: $" + pago;
}