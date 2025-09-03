//aca capturo la figura
const figura = document.getElementById("figure");

// ACA CAPTURO LOS BOTONES
//BOTONES ESTILOS
const circulo = document.getElementById("btnCircle");
const estrella = document.getElementById("btnStar");
const gif = document.getElementById("btnGif");
const animacion = document.getElementById("btnAnim");
const moverArriba = document.getElementById("btnMoveUp");
const moverAbajo = document.getElementById("btnMoveDown");
const moverIzq = document.getElementById("btnMoveLeft");
const moverDer = document.getElementById("btnMoveRight");

//BOTONES CONTENIDOS
const cambiarTitulo = document.getElementById("btnChangeTitle");
const cambiarParrafo = document.getElementById("btnChangeParagraph");
const agregarParrafo = document.getElementById("btnAddParagraph");
const EliminarParrafo = document.getElementById("btnRemoveParagraph");




//resetear las figuras
function resetFigura() {
    figura.style.borderRadius = "";
    figura.style.clipPath = "none";
    figura.style.backgroundImage = "none";
    figura.style.toggle = "";
    figura.style.transform = "";
};

//C A M B I A R .....E S T I L O S...........................................................................................................................
//al hacer click en el botón, cambia la figura a círculo
circulo.addEventListener("click", () => {
    resetFigura();
    figura.style.borderRadius = "50%";
});

// al hacer click en el botón, cambia la figura a estrella
estrella.addEventListener("click", () => {
    resetFigura();
    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
});

//al hacer click coloca un gof en la figura
gif.addEventListener("click", () => {
    resetFigura();
    figura.style.backgroundImage = "url('img/topGun.gif')";
});

//al hacer click la fic¿gura parpadea
animacion.addEventListener("click", () => {
    resetFigura();
    figura.classList.toggle("parpadear");
});

//al hacer click la figura se mueve hacia arriba
moverArriba.addEventListener("click", () => {
    resetFigura();
    figura.style.transform = "translateY(-50px)";
});

//al hacer click la figura se mueve hacia abajo 
moverAbajo.addEventListener("click", () => {
    resetFigura();
    figura.style.transform = "translateY(50px)";
});

//al hacer click la figura se mueve a la izq
moverIzq.addEventListener("click", () => {
    resetFigura();
    figura.style.transform = "translatex(-50px)";
});

//al hacer click la figura se mueve a la derecha
moverDer.addEventListener("click", () => {
    resetFigura();
    figura.style.transform = "translatex(50px)";
});



//C A M B I A R.......C O N T E N I D O S ...........................................................................................................................
cambiarTitulo.addEventListener("click", () => {
    const nuevoTexto = prompt("Escribe un nuevo título:");
    mainTitle.textContent = nuevoTexto;
});

cambiarParrafo.addEventListener("click", () => {
    const nuevoParrafo = prompt("escribe un parrafo nuevo");
    mainParagraph.innerText = nuevoParrafo;
});

agregarParrafo.addEventListener("click", () => {
    const parrafoExtra = prompt("digita un parrafo extra");
    extraParagraphs.innerText =parrafoExtra;
});

EliminarParrafo.addEventListener("click", () => {
    extraParagraphs.remove();
});







