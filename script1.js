let datoActual =document.getElementById('datoActuales')
let datoAnteriores= document.getElementById('datoAnteriores');
let valorFinal = document.getElementById('valorFinal');

//formula de la división

function division(num1, num2) {
    let funDivision = (+num1 /+num2);
    return funDivision;
}


// luego creamos la funcion donde llamamos la formula de division

function envioBoton() {

    let formulaChurn2= division (datoActual.value, datoAnteriores.value)
    let resultadofinal = formulaChurn2* 100
    valorFinal.textContent = parseInt(resultadofinal)
    console.log(valorFinal)
}