function calcular215() {
    let r =parseFloat (document.getElementById("r").value);
    let i =parseFloat (document.getElementById("i").value);
    const potencia= (r*i)*i;
    document.getElementById("potencia").textContent = "La potencia es de:" + potencia;

}