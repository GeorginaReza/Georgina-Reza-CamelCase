function calcular212() {
    let precio =parseFloat (document.getElementById("precio").value);
    const artDes= precio * 0.80;
    const iva=precio * 0.15;
    const preciofin=artDes + iva;
    document.getElementById("artDes").textContent = "Precio con descuento $" + artDes;
    document.getElementById("preciofin").textContent = "Precio final a pagar con IVA incluido: $" + preciofin;
}