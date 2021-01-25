import validator from './validator.js';
// Enlazar la función en el input del index.html
const cardNumber = document.getElementById("cardnumber");
let error = document.getElementById("error");
let correcto = document.getElementById("correcto");

// sirve para mantener enlazado el evento blur con el input
cardNumber.addEventListener("blur", function () {
    let isValid = validator.isValid(cardNumber.value);

    if (isValid == true) {
        correcto.innerText = "La tarjeta es válida";
        //alert("Esta tarjeta es válida");
    } else {
        error.innerText = "La tarjeta es inválida";
        //alert("Esta tarjeta es inválida");
    }
    cardNumber.value = validator.maskify(cardNumber.value);
});

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden"
    }, 850)
});

window.addEventListener("click", function (e) {
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");

        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden"
        }, 850)
    }
});

function reemplazar (){
    document.getElementById("total").innerText = "Total S/.20.00";
}
document.getElementById("afiliate1").onclick = function(){
    reemplazar();
}

function reemplazar2 (){
    document.getElementById("total").innerText = "Total S/.40.00";
}
document.getElementById("afiliate2").onclick = function(){
    reemplazar2();
}

function reemplazarplan (){
    document.getElementById("tipoplan").innerText = "Usted está adquiriendo el Plan Estándar";
}
document.getElementById("afiliate1").onclick = function(){
    reemplazarplan();
}

function reemplazarplan2 (){
    document.getElementById("tipoplan").innerText = "Usted está adquiriendo el Plan Premium";
}
document.getElementById("afiliate2").onclick = function(){
    reemplazarplan();
}

document.getElementById("afiliate1").onclick = function(){
    reemplazarplan();
    reemplazar();
}

document.getElementById("afiliate2").onclick = function(){
    reemplazarplan2();
    reemplazar2();
}
