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

//4. Agregar animación → Aplica una animación CSS.  se agrego css linea 107
function agregarAnimacion() {
    figura.classList.toggle("parpadear");
}

//5. hacemos que se mueva hacia arriba
function moverArriba() {
    figura.style.transform = "translateY(-50px)";
}

//6. Mover abajo → Desplaza la figura hacia abajo.
function moverAbajo() {
    figura.style.transform = "translatey(50px)";
}

//7. Mover izquierda → Desplaza la figura hacia la izquierda.
function moverIzquierda() {
    figura.style.transform = "translatex(-50px)";
}

//8. Mover derecha → Desplaza la figura hacia la derecha.
function moverDerecha() {
    figura.style.transform = "translatex(50px)";
}


//C O N T E N I D O S..................................................................................................................
//9. Cambiar título (prompt) → Con prompt, pedir un texto nuevo para el título principal y remplazarlo
function cambiarTitulo() {
    const cambioTitulo = document.getElementById("mainTitle");
    let nuevoTitulo = prompt("Escribe un nuevo título:");
    cambioTitulo.textContent = nuevoTitulo;
}

//10. Cambiar párrafo (prompt) → Con prompt, pedir un texto nuevo y reemplazar el contenido del primer párrafo.
function cambiarParrafo() {
    const cambioParrafo = document.getElementById("mainParagraph");
    let nuevoParrafo = prompt("escribe un parrafo nuevo");
    cambioParrafo.innerText = nuevoParrafo;
}

//11. Agregar un párrafo → Insertar dinámicamente un nuevo <p> al final con texto fijo o pedido con prompt.
function agregarParrafo() {
    const parrafo = document.createElement("p"); // Creao un nuevo <p>
    document.getElementById("extraParagraphs").appendChild(parrafo);  // Inserto el p dentro del contenedor

    let nuevoParrafo = prompt("escribe un parrafo nuevo"); //se solicita al usuario que digite un nuevo parrafo
    parrafo.textContent = nuevoParrafo; // Asignar el texto digitado
}

//12. Eliminar último párrafo → Eliminar el último <p> agregado.
function eliminarParrafo() {
    extraParagraphs.lastChild.remove();
}


//A T R I B U T O S........................................................................................................................
//13. Color en HEX (prompt) → Con prompt, pedir un color en formato #HEX y aplicarlo como fondo de la figura.
function colorHex() {
    let nuevoColor = prompt("ingrese nuevo color en formato #HEX");
    figura.style.backgroundColor = nuevoColor;
}

//14. Elegir figura (prompt) → Con prompt, elegir entre "círculo", "estrella" o "cuadrado"y cambiar la figura.
function eleccionFigura() {
    let tuFigura = prompt("¿cual figura prefieres? circulo, estrella o cuadrado");

    switch (tuFigura) {
        case "circulo":
            figura.style.clipPath = "none"; // por si tenía estrella antes
            figura.style.borderRadius = "50%";
            break;

        case "estrella":
            figura.style.borderRadius = "0"; // por si estaba en círculo
            figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;

        case "cuadrado":
            figura.style.borderRadius = "0";
            figura.style.clipPath = "none"; // vuelve a ser un cuadrado4

            break;
        default:
            alert("Por favor digita una figura válida: circulo, estrella o cuadrado")
            break;
    }
}

//15. Cambiar imagen (siguiente) → Reemplazar src de la imagen por la siguiente en un arreglo de imágenes.
let imagenActual = 0; // Índice inicial,  se declara imagenActual fuera de la función para que se mantenga su valor entre clics:

function ImagenNext() {
    const imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"]; // Arreglo con las imágenes
    const imagen = document.getElementById("mainImage"); // Capturo la imagen

    imagenActual++; // Avanzar a la siguiente ímagen (0→1→2…)
    if (imagenActual >= imagenes.length) {  // permite saber cuantas imagenes hay .lenght y Si llegamos al final
        imagenActual = 0;  // Volver al inicio
    }
    imagen.src = imagenes[imagenActual]; // Cambiar la imagen en el src
}


//16. Cambiar imagen (atrás) → Reemplazar src de la imagen por la anterior en un arreglo de imágenes.
function imagenBack() {
    const imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
    const imagen = document.getElementById("mainImage");

    imagenActual--; //retroceder imagen
    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1
    }
    imagen.src = imagenes[imagenActual];
}

//17. Mostrar/Ocultar imagen → Alternar la visibilidad (display: none/block) de la imagen. (se agrego css linea 118)
function ocultarImagen() {
    const imagenOculta = document.getElementById("mainImage");
    imagenOculta.classList.toggle("oculto"); // alterna la clase
}

//18. Cambiar atributo ALT → Con prompt, pedir un texto y asignarlo como atributo alt de la imagen.
function cambiarAtributo() {
    const atributo = document.getElementById("mainImage");
    let atributoAlt = prompt("texto para asignar como atributo ALT de la imagen:");

    atributo.setAttribute("alt", atributoAlt);
}

//19. Cambiar enlace (prompt) → Con prompt, pedir una nueva URL y asignarla al <a> (atributo href).
function nuevaUrl () {
    const urlNueva = document.getElementById("mainLink");
    let urlIngresada = prompt("ingrese nueva URL  a asignar:");

    urlNueva.setAttribute("href", urlIngresada);
}

//20. Abrir enlace en nueva pestaña → Forzar que el enlace se abra en otra pestaña con target="_blank".
function otraPestana () {
    const pestanaNueva = document.getElementById("mainLink");

    pestanaNueva.setAttribute("target", "_blank");
    pestanaNueva.setAttribute("href", "https://github.com/Albert-Gutierrez");
}

//21. Deshabilitar enlace → Quitar el atributo href del <a> para que no sea clickeable.
function DeshabilitarEnlace () {
    const enlace = document.getElementById("mainLink");
    enlace.removeAttribute("href");
    enlace.style.cursor = "not-allowed";
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
/*12*/document.getElementById("btnRemoveParagraph").addEventListener("click", eliminarParrafo);
//ATRIBUTOS
/*13*/document.getElementById("btnHexColor").addEventListener("click", colorHex);
/*14*/document.getElementById("btnChooseFigure").addEventListener("click", eleccionFigura);
/*15*/document.getElementById("btnChangeImageNext").addEventListener("click", ImagenNext);
/*16*/document.getElementById("btnChangeImagePrev").addEventListener("click", imagenBack);
/*17*/document.getElementById("btnToggleImage").addEventListener("click", ocultarImagen);
/*18*/document.getElementById("btnChangeAlt").addEventListener("click", cambiarAtributo);
/*19*/document.getElementById("btnChangeLink").addEventListener("click", nuevaUrl);
/*20*/document.getElementById("btnOpenLink").addEventListener("click", otraPestana);
/*21*/document.getElementById("btnDisableLink").addEventListener("click", DeshabilitarEnlace);
});

