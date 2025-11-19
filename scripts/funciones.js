


// para reproducir musica
const audio = document.getElementById('miAudio');

function toggleMusic() {
    if (audio.paused) {
        console.log('entra...')
        audio.play();
    } else {
        audio.pause();
    }
}

// para saber cuanto va de audio reproducido
const barraProgreso = document.getElementById("barraProgreso");
const handleProgress = document.getElementById("handleProgress");


audio.addEventListener('timeupdate', () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    console.log(porcentaje.toFixed(2) + '%'); // porcentaje con 2 decimales
    barraProgreso.style.width = porcentaje.toFixed(2) + "%";
    handleProgress.style.left = porcentaje.toFixed(2) + "%";
});

//contador de dias y tiempo
function calcularDias(fechaInicio, fechaFin) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const diferenciaEnMilisegundos = fin.getTime() - inicio.getTime();

    //convertimos los milisegundos a dias 
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / milisegundosPorDia);

    return diferenciaEnDias;
}

const fecha1 = new Date(Date.now());
const fecha2 = new Date("2026-01-17");

// const diasTranscurridos = calcularDias(fecha1, fecha2);
// console.log(`Faltan ${diasTranscurridos} días`);


function contadorRegresivo(fechaObjetivo) {
    const contadorDias = document.getElementById('contador_dias');
    const contadorHoras = document.getElementById('contador_horas');
    const contadorMinutos = document.getElementById('contador_minutos');
    const contadorSegundos = document.getElementById('contador_segundos');
    const objetivo = new Date(fechaObjetivo);

    const intervalo = setInterval(() => {
        const ahora = new Date();

        const diferencia = objetivo.getTime() - ahora.getTime();

        if (diferencia <= 0) {
            clearInterval(intervalo);
            console.log("¡Llegó el día! 🎉");
            return;
        }

        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;


        contadorDias.innerText = `${dias}`;
        contadorHoras.innerText = `${horas.toString().padStart(2, "0")}`;
        contadorMinutos.innerText = `${minutos.toString().padStart(2, "0")}`;
        contadorSegundos.innerText = `${segundos.toString().padStart(2, "0")}`;
    }, 1000);
}

contadorRegresivo("2026-01-31T00:00:00");

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.images;
    const limite = 3; // cuántas imágenes quieres esperar
    let cargadas = 0;

    function verificarCarga() {
        if (cargadas >= limite) {
            ocultarLoader();
        }
    }

    // Recorre solo las primeras 5
    for (let i = 0; i < limite; i++) {
        if (!imagenes[i]) continue;

        if (imagenes[i].complete) {
            cargadas++;
            verificarCarga();
        } else {
            imagenes[i].addEventListener("load", () => {
                cargadas++;
                verificarCarga();
            });

            imagenes[i].addEventListener("error", () => {
                cargadas++;
                verificarCarga();
            });
        }
    }

    function ocultarLoader() {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});


function scrollLento(element, duration = 1500) {
    const target = element.getBoundingClientRect().top;
    const start = window.pageYOffset;
    let startTime = null;

    function animarScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out
        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start + target * ease);

        if (elapsed < duration) {
            requestAnimationFrame(animarScroll);
        }
    }

    requestAnimationFrame(animarScroll);
}

function irATexto() {
    const seccion = document.getElementById("seccionTexto");
    if (seccion) {
        scrollLento(seccion, 2000);
    }
}


const numeroWhatsApp = "527122605971";

const eventoNombre = "XV años de Valeria";

function enviarWhatsApp(asistira) {


    let mensajeBase = asistira
        ? `Hola, confirmo que asistiré a los ${eventoNombre}.`
        : `Hola, no podré asistir a los ${eventoNombre}.`;



    const mensaje = encodeURIComponent(mensajeBase);

    const url = numeroWhatsApp
        ? `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
        : `https://wa.me/?text=${mensaje}`;

    window.open(url, "_blank");
}

document.getElementById("btn-si").onclick = function () {
    enviarWhatsApp(true);
};

document.getElementById("btn-no").onclick = function () {
    enviarWhatsApp(false);
};