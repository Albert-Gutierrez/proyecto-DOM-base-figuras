//aca capturo la figura
const figura = document.getElementById("figure");



//E S T I L O S.........................................................................................................................
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

//5. hacemos que se mueva hacia arriba
function moverArriba () {
    figura.style.transform = "translateY(-50px)";
}

//6. Mover abajo → Desplaza la figura hacia abajo.
function moverAbajo () {
    figura.style.transform = "translatey(50px)";
}

//7. Mover izquierda → Desplaza la figura hacia la izquierda.
function moverIzquierda  () {
    figura.style.transform = "translatex(-50px)";
}

//8. Mover derecha → Desplaza la figura hacia la derecha.
function moverDerecha () {
    figura.style.transform = "translatex(50px)";
}


//C O N T E N I D O S..................................................................................................................
//9. Cambiar título (prompt) → Con prompt, pedir un texto nuevo para el título principal y remplazarlo
function cambiarTitulo (){
    const nuevoTitulo = prompt("Escribe un nuevo título:");
    mainTitle.textContent = nuevoTitulo;
}

//10. Cambiar párrafo (prompt) → Con prompt, pedir un texto nuevo y reemplazar el contenido del primer párrafo.
function cambiarParrafo () {
    const nuevoParrafo = prompt("escribe un parrafo nuevo");
    mainParagraph.innerText = nuevoParrafo;
}

//11. Agregar un párrafo → Insertar dinámicamente un nuevo <p> al final con texto fijo o pedido con prompt.
function agregarParrafo () {
   const parrafoExtra = prompt("digita un parrafo extra");
    extraParagraphs.innerText = parrafoExtra;

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
//CONTENIDOS
/*9*/document.getElementById("btnChangeTitle").addEventListener("click", cambiarTitulo);
/*10*/document.getElementById("btnChangeParagraph").addEventListener("click", cambiarParrafo);
/*11*/document.getElementById("btnAddParagraph").addEventListener("click", agregarParrafo);




})

