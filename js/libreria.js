// efecto carrusel con texto y boton
var imgs=new Array(5);

imgs[0]="../imagenes/carrusel1.jpg";
imgs[1]="../imagenes/carrusel2.jpg";
imgs[2]="../imagenes/carrusel3.jpg";
imgs[3]="../imagenes/carrusel4.jpg";
imgs[4]="../imagenes/carrusel5.jpg";

var titulos = new Array(5);
titulos[0] = "Minecraft";
titulos[1] = "Mufasa: El Rey León";
titulos[2] = "Godzilla y Kong: El Nuevo Imperio";
titulos[3] = "El Reino del Planeta de los Simios";
titulos[4] = "Deadpool & Wolverine";

var textos = new Array(5);
textos[0] = "Bienvenido al mundo de Minecraft, donde la creatividad no sólo ayuda a crear, sino que es esencial para la supervivencia.";
textos[1] = "Descubre la historia jamás contada del legendario rey de la Sabana. Un viaje épico al pasado de Mufasa, padre de Simba.";
textos[2] = "Dos titanes. Una nueva amenaza. Godzilla y Kong deben unir fuerzas para enfrentar un enemigo que podría destruir su mundo y el nuestro.";
textos[3] = "Muchos años después del reinado de César, los simios dominan la Tierra. Pero un nuevo líder amenaza con romper la paz y cambiar el futuro de ambos mundos.";
textos[4] = "Dos leyendas, un destino. Deadpool regresa más descontrolado que nunca... y esta vez, ¡Wolverine va con él! Acción, humor y caos multiversal en su máxima expresión.";

var c=0;

function carrusel()
{
    document.getElementById("ban").src=imgs[c];
    document.getElementById("titulo-carrusel").innerText = titulos[c];
    document.getElementById("texto-carrusel").innerText = textos[c];
    c++;
    if(c>=imgs.length) c=0;
    setTimeout(carrusel,5000);
}

document.body.setAttribute("onload","carrusel()");

const tituloDinamico = document.getElementById("titulo-dinamico");
const colores = ["red", "green", "blue", "purple", "orange"];
let i = 0;

setInterval(() => {
  tituloDinamico.style.color = colores[i];
  i = (i + 1) % colores.length;
}, 1000);