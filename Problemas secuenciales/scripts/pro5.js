function calcular214() {
    let dias =parseFloat (document.getElementById("dias").value);
    let diacomida =parseFloat (document.getElementById("diacomida").value);
    let diahotel =parseFloat (document.getElementById("diahotel").value);
    const hotel=dias*diahotel;
    const comida=diahotel*dias;
    const otros=dias*100;
    const total=hotel+comida+otros
    document.getElementById("hotel").textContent = "Gastos de hotel:" + hotel;
    document.getElementById("comida").textContent = "Gastos de comida:" + comida;
    document.getElementById("otros").textContent = "Gasto en otros:" + otros;
    document.getElementById("total").textContent = "Cheque a dar:" + total;
}