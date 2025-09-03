//aca capturo la figura
const figura = document.getElementById("figure");

//REALIZAMOS EL CAMBIO DE CUADRADO A CIRCULO
function cambiarCirculo() {
    figura.style.borderRadius = "50%";
    figura.style.backgroundColor = "red";
}

//realizamos el cambio a una estrella
function cambiarEstrella() {
    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}

//colocamos un gif
function ponerGif() {
    figura.style.backgroundImage = "url('img/topGun.gif')";
}





document.addEventListener("DOMContentLoaded", function () {
/*1*/document.getElementById("btnCircle").addEventListener("click", cambiarCirculo);
/*2*/document.getElementById("btnStar").addEventListener("click", cambiarEstrella);





})