function calcular217() {
    let c1 =parseFloat (document.getElementById("c1").value);
    let c2 =parseFloat (document.getElementById("c2").value);
    let c3 =parseFloat (document.getElementById("c3").value);
    const r1= (c1*25)/10;
    const r2= (c2*25)/10;
    const r3= (c3*50)/10;
    const prom= (r1+r2+r3)/10;
    document.getElementById("prom").textContent = "Tu promedio es de :" + prom;

}