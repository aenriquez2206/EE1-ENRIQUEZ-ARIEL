function calcularTemp(){
    const faren = document.getElementById("inTemp").value ;
    const centi = (parseFloat(faren)-32)*(5/9);
    alert("La temperatura calculada es " +centi+"°C")
}