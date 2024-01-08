let datoEncuestados = document.getElementById('datoEncuestados');
let datoPromotores = document.getElementById('datoPromotores');
let datoDetractores = document.getElementById('datoDetractores');
let valorFinal = document.getElementById('valorFinal');
let indicadorF = document.getElementById('indicadorF');
let botonAtras = document.getElementById('botonAtras');
let contenedorPrincipal = document.getElementById('contenedorPrincipal');

// primero creamos las funciones de division y resta, ya que son las funciones matemáticas que necesitamos en la formula

function division(num1, num2) {
    let funDivision = (+num1 /+num2);
    return funDivision;
}


function restaa(num1, numm2) {
    let funResta = +num1 - +numm2;
    return funResta;
}

// luego creamos el boton, donde llamamos las funciones anteriores, que contienen los procesos matemáticos
    
function envioBoton() {

    console.log(datoPromotores.value)
    
    let porcentajeDetractores = division(datoDetractores.value, datoEncuestados.value)
    console.log(porcentajeDetractores) 
    let porcentajePromotores = division(datoPromotores.value,datoEncuestados.value)
    let npsFinal = restaa(porcentajePromotores,porcentajeDetractores)
    let npsFinal2 = npsFinal*100
    valorFinal.textContent = parseInt(npsFinal2)
    

    if(npsFinal2 <= -1 && npsFinal2 >= -100) {
        indicadorF.textContent = "El NPS tiene un resultado pésimo"
    } else if (npsFinal2 >=0 && npsFinal2 <= 49) {
        indicadorF.textContent = "El NPS tiene un resultado razonable"
    } else if (npsFinal2 >=50 && npsFinal2 <= 74) {
        indicadorF.textContent = "El NPS tiene un resultado Muy bueno"
    } else if (npsFinal2 >=75 && npsFinal2 <= 100) {
        indicadorF.textContent = "El NPS tiene un resultado Excelente"}

          
 }

 function indicadores() {
    contenedorPrincipal.style.visibility='visible';
}
botonAtras.onclick= function() {
    contenedorPrincipal.style.visibility='hidden';
}

contenedorPrincipal.onclick =function(){
    contenedorPrincipal.style.visibility='hidden';
}
