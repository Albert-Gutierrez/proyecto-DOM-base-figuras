//aca capturo la figura
const figura = document.getElementById("figure");

//1. REALIZAMOS EL CAMBIO DE CUADRADO A CIRCULO
function cambiarCirculo() {
    figura.style.borderRadius = "50%";
    figura.style.backgroundColor = "red";
}

//2. realizamos el cambio a una estrella
function cambiarEstrella() {
    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}

//3. colocamos un gif
function ponerGif() {
    figura.style.backgroundImage = "url('img/topGun.gif')";
    figura.style.backgroundSize = "cover";
}

//4. Agregar animación → Aplica una animación CSS
function agregarAnimacion() {
    figura.classList.toggle("parpadear");
}

//hacemos que 
function moverArriba () {
    figura.style.transform = "translateY(-50px)";
}

function moverAbajo () {
    figura.style.transform = "translatey(50px)";
}

function moverIzquierda  () {
    figura.style.transform = "translatex(-50px)";
}

function moverDerecha () {
    figura.style.transform = "translatex(50px)";
}




document.addEventListener("DOMContentLoaded", function () {
 //ESTILOS
/*1*/document.getElementById("btnCircle").addEventListener("click", cambiarCirculo);
/*2*/document.getElementById("btnStar").addEventListener("click", cambiarEstrella);
/*3*/document.getElementById("btnGif").addEventListener("click", ponerGif);
/*4*/document.getElementById("btnAnim").addEventListener("click", agregarAnimacion);
/*5*/document.getElementById("btnMoveUp").addEventListener("click", moverArriba);
/*6*/document.getElementById("btnMoveDown").addEventListener("click", moverAbajo);
/*7*/document.getElementById("btnMoveLeft").addEventListener("click", moverIzquierda);
/*8*/document.getElementById("btnMoveRight").addEventListener("click", moverDerecha);











})