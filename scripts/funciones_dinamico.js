


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

// 👉 Arrays de invitados por familia
const familias = {
    1: {
        nombre: "Familia Lamadrid Vertiz",
        invitados: [
            "Oliva Vertiz Santiago",
            "Leopoldo Lamadrid Hoyo",
            "Rosalba Lamadrid Vertiz",
            "Juan Carlos Lamadrid Vertiz",
        ]
    },
    2: {
        nombre: "",
        invitados: [
            "Elida Salazar Vertiz",
            "Jorge Reyes González",
        ]
    },
    3: {
        nombre: "",
        invitados: [
            "Raquel García De La Cruz",
            "Gerardo García Vertiz",
        ]
    },
    4: {
        nombre: "",
        invitados: [
            "María De Jesús Gónzalez Vázquez",
            "Arturo Basilio Gónzalez",
            "Saúl Basilio Vertiz",
        ]
    },

    5: {
        nombre: "",
        invitados: [
            "Sandra Lamadrid Vertiz",
            "Yamilet Lamadrid Santiago",
            "Mateo Lamadrid Santiago",
            "Elias Lamadrid Santiago",
        ]
    },
    6: {
        nombre: "",
        invitados: [
            "Jair Basilio González",
            "Bárbara Basilio Mondragón",
        ]
    },
    7: {
        nombre: "",
        invitados: [
            "Luis Lamadrid Vertiz",
            "Alondra Lamadrid Jimenéz",
        ]
    },
    8: {
        nombre: "",
        invitados: [
            "Agustina Vertiz Santiago",
            "Jóse Salazar González",
        ]
    },
    9: {
        nombre: "",
        invitados: [
            "Araceli Lamadrid Vertiz",
            "Gerardo López López",
        ]
    }
    // Puedes agregar más familias:
    // 2: { nombre: "Familia Rodríguez López", invitados: [...] }
};

function getFamIndexFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("ivmxtm"), 10) || 0;
}

function cargarTituloFamilia() {
    const index = getFamIndexFromURL();
    const titulo = document.getElementById("titulo-familia");

    if (familias[index]) {
        titulo.textContent = familias[index].nombre;
    } else {
        titulo.textContent = "Familia Invitada";
    }
}

// --- Generar checkboxes dinámicos ---
function cargarNombres() {
    const contenedor = document.getElementById("lista-nombres");
    contenedor.innerHTML = "";

    const index = getFamIndexFromURL();

    if (!familias[index]) return;

    familias[index].invitados.forEach(nombre => {
        const item = document.createElement("label");
        item.innerHTML = `
            <input type="checkbox" value="${nombre}"> ${nombre}
        `;
        contenedor.appendChild(item);
    });
}

// Ejecutar funciones al cargar
cargarTituloFamilia();
cargarNombres();

// --- Enviar mensaje WhatsApp ---
function enviarWhatsApp(asistira, seleccionados = [], dedicatoria = "") {

    let mensajeBase = asistira
        ? `Hola, confirmo que asistiré a los ${eventoNombre}.`
        : `Hola, no podré asistir a los ${eventoNombre}.`;

    if (asistira) {
        mensajeBase += `\n\nAsistirán:\n- ${seleccionados.join("\n- ")}`;

        if (dedicatoria.trim() !== "") {
            mensajeBase += `\n\nMensaje para Valeria:\n"${dedicatoria}"`;
        }
    }

    const mensaje = encodeURIComponent(mensajeBase);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank");
}

// --- Botón SI ---
document.getElementById("btn-si").onclick = function () {
    document.getElementById("form-asistencia").style.display = "block";
};

// --- Botón NO ---
document.getElementById("btn-no").onclick = function () {

    document.getElementById("form-asistencia").style.display = "none";

    document.querySelectorAll('#lista-nombres input').forEach(chk => chk.checked = false);
    document.getElementById("mensaje-valeria").value = "";

    enviarWhatsApp(false);
};

document.getElementById("btn-enviar-confirmacion").onclick = function () {
    const seleccionados = [...document.querySelectorAll('#lista-nombres input:checked')]
        .map(c => c.value);

    if (seleccionados.length === 0) {
        alert("Selecciona al menos un asistente.");
        return;
    }

    const dedicatoria = document.getElementById("mensaje-valeria").value;

    enviarWhatsApp(true, seleccionados, dedicatoria);
};
