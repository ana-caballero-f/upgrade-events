"use strict"

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click


const btn = document.querySelector('#btnToClick');
btn.addEventListener('click', btnEvento);

function btnEvento(event) {
    console.log(event);
}


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector('.focus').addEventListener('focus', eventoFocus);

function eventoFocus(valor){
    let valorFocus = valor.target.value;
    console.log("Se muestra el valor de texto focus " + valorFocus);
}


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
//TIENE QUE MOSTRAR LO QUE SE ESCRIBA EN CUALQUIER INPUT (hacer bucle)


let valoresInputs = document.querySelectorAll('input[type="text"]');
console.log(valoresInputs);
for(let valor of valoresInputs){
    valor.addEventListener('change', eventoValor);
}

function eventoValor(event){
    let vIntroducidos = event.target.value;
    console.log(`Valor en el primer input ${vIntroducidos}`);
}



