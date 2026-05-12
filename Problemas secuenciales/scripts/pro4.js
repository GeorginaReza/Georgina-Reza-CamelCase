function calcular213() {
    let sueldo =parseFloat (document.getElementById("sueldo").value);
    const meses=12
    const semanas=meses*4
    const ahorro=(sueldo*0.25)*semanas;
    document.getElementById("ahorro").textContent = "Dinero ahorrado:" + ahorro;
}