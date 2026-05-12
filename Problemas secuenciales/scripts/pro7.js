function calcular216() {
    let b =parseFloat (document.getElementById("b").value);
    let a =parseFloat (document.getElementById("a").value);
    const area= b*a;
    document.getElementById("area").textContent = "El area en medidas al cuadrado es :" + area;

}