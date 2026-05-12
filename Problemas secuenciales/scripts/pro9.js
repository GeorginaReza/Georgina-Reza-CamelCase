function calcular218() {
    let edad =parseFloat (document.getElementById("edad").value);
    const meses= 12*edad;
    const semanas=meses * 4;
    const dias= semanas * 7;
    const horas= dias* 24;
    document.getElementById("meses").textContent = "Meses vividos :" + meses;
    document.getElementById("semanas").textContent = "Semanas vividas :" + semanas;
    document.getElementById("dias").textContent = "Dias vividos :" + dias;
    document.getElementById("horas").textContent = "Horas vividas :" + horas;

}