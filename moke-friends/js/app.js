let ataqueJugador = ''
let ataqueCPU = ''
let vidasJugador = 3
let vidasCPU = 3
let pjJugador = ''
let pjCPU = ''


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    let sectionMensajes = document.getElementById('mensajes')
    let sectionReiniciar = document.getElementById('reiniciar')

    sectionSeleccionarAtaque.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    let botonSeleccionarPjJugador = document.getElementById('boton-personaje')
    botonSeleccionarPjJugador.addEventListener('click', seleccionarPjJugador)

    let botonChupapija = document.getElementById('boton-chupapija')
    botonChupapija.addEventListener('click', atqChupapija)
    
    let botonTrolo = document.getElementById('boton-trolo')
    botonTrolo.addEventListener('click', atqTrolo)

    let botonPickle = document.getElementById('boton-pickle')
    botonPickle.addEventListener('click', atqPickle)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPjJugador() {
    let inputSamu = document.getElementById('samu')
    let inputFénix = document.getElementById('fénix')
    let inputCheck = document.getElementById('check')
    let inputJJ = document.getElementById('jj')

    let spanPjJugador = document.getElementById('pjJugador')
    if (inputSamu.checked) {
        spanPjJugador.innerHTML = 'Samillo el pillo alias "Samillo1270"'
        pjJugador = 'Samillo el pillo alias "Samillo1270"'
    } else if (inputFénix.checked) {
        spanPjJugador.innerHTML = 'José Feliciano alias "Fenixrex32002"'
        pjJugador = 'José Feliciano alias "Fenixrex32002"'
    } else if (inputCheck.checked) {
        spanPjJugador.innerHTML = 'Peter Checkpoint alias "Checonmi"'
        pjJugador = 'Peter Checkpoint alias "Checonmi"'
    } else if (inputJJ.checked) {
        spanPjJugador.innerHTML = 'Potter alias "Julian pro"'
        pjJugador = 'Potter alias "Julian pro"'
    } else {
        alert('SELECCIONA UN PJ')
    }

    seleccionarPjCPU()
}

function atqChupapija() {
    ataqueJugador = 'Ataque Chupapija'
    seleccionarAtqCPU()
}

function atqTrolo() {
    ataqueJugador = 'Defensa Trola'
    seleccionarAtqCPU()
}

function atqPickle() {
    ataqueJugador = 'Pickle Rick'
    seleccionarAtqCPU()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarPjCPU() {
    let pjAleatorio = aleatorio(1, 7)
    let spanPjCPU = document.getElementById('pjCPU')
    if (pjAleatorio == 1) {
        spanPjCPU.innerHTML = 'Samillo el pillo alias "Samillo1270"'
        pjCPU = 'Samillo el pillo alias "Samillo1270"'
    } else if (pjAleatorio == 2) {
        spanPjCPU.innerHTML = 'José Feliciano alias "Fenixrex32002"'
        pjCPU = 'José Feliciano alias "Fenixrex32002"'
    } else if (pjAleatorio == 3) {
        spanPjCPU.innerHTML = 'Peter Checkpoint alias "Checonmi"'
        pjCPU = 'Peter Checkpoint alias "Checonmi"'
    } else {
        spanPjCPU.innerHTML = 'Potter alias "Julian pro"'
        pjCPU = 'Potter alias "Julian pro"'
    } 

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.style.display = 'block'
    let sectionSeleccionarPj = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPj.style.display = 'none'
}

function seleccionarAtqCPU() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueCPU = 'Ataque Chupapija'
    } else if (ataqueAleatorio == 2) {
        ataqueCPU = 'Defensa Trola'
    } else {
        ataqueCPU = 'Pickle Rick'
    }

    combate()
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu personaje ' + pjJugador + ' lanzó ' + ataqueJugador + '. El personaje del CPU ' + pjCPU + ' te devolvió con ' + ataqueCPU + '. ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasCPU = document.getElementById('vidas-cpu')

    if (ataqueJugador == ataqueCPU) {
        crearMensaje('EMPATE')
    } else if ((ataqueJugador == 'Ataque Chupapija' && ataqueCPU == 'Pickle Rick') || (ataqueJugador == 'Defensa Trola' && ataqueCPU == 'Ataque Chupapija') || (ataqueJugador == 'Pickle Rick' && ataqueCPU == 'Defensa Trola')) {
        crearMensaje('GANASTE')
        vidasCPU--
        spanVidasCPU.innerHTML = vidasCPU
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal('PERDISTE')
    } else if (vidasCPU == 0) {
        crearMensajeFinal('GANASTE')
    }
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    parrafo = document.createElement('p')
    parrafo.innerHTML = 'EL JUEGO SE ACABÓ Y ' + resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonChupapija = document.getElementById('boton-chupapija')
    let botonTrolo = document.getElementById('boton-trolo')
    let botonPickle = document.getElementById('boton-pickle')

    botonChupapija.disabled = true
    botonTrolo.disabled = true
    botonPickle.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)