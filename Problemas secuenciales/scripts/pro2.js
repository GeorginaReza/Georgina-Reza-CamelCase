function calcular211() {
    let kw =parseFloat (document.getElementById("kw").value);
    let pago = 0;
    if (kw <= 100) {
        pago = kw * 1.5;
    } else if (kw <= 200) {
        pago = kw * 2;
    } else {
        pago = kw * 3;
    }
    document.getElementById("resultado").textContent = "Total a pagar: $" + pago;
}