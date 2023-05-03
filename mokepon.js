let ataqueJugador = ''
let ataqueCPU = ''
let vidasJugador = 3
let vidasCPU = 3

function iniciarJuego() {
    let sectionSeleccionarFalconPunch = document.getElementById('seleccionar-falcon---punch')
    let sectionMensajes = document.getElementById('mensajes')
    let sectionReiniciar = document.getElementById('reiniciar')

    sectionSeleccionarFalconPunch.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-muerto')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarFalconPunch = document.getElementById('seleccionar-falcon---punch')
    sectionSeleccionarFalconPunch.style.display = 'block'
    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigüeya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        alert("SELECCIONASTE A HIPODOGE".toUpperCase())

    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        alert("SELECCIONASTE A capipepo".toUpperCase())

    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigüeya'
        alert("SELECCIONASTE A ratigüeya".toUpperCase())
        
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
        alert("SELECCIONASTE A langostelvis".toUpperCase())
        
    } else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
        alert("SELECCIONASTE A tucapalma".toUpperCase())

    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
        alert("SELECCIONASTE A pydos".toUpperCase())

    } else {
        alert("SELECCIONA UNA MASCOTA")
    }

    seleccionarMascotaCPU()
}

function seleccionarAtaqueCPU() {
    ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueCPU = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueCPU = 'AGUA'
    } else {
        ataqueCPU = 'TIERRA'
    }

    combate()
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueCPU()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    seleccionarAtaqueCPU()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    seleccionarAtaqueCPU()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function seleccionarMascotaCPU() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaCPU =  document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaCPU.innerHTML = 'Hipodoge'
        alert('CPU HA ESCOGIDO A HIPODOGE')
    } else if(mascotaAleatoria == 2) {
        spanMascotaCPU.innerHTML = 'Capipepo'
        alert('CPU HA ESCOGIDO A CAPIPEPO')
    } else if(mascotaAleatoria == 3) {
        spanMascotaCPU.innerHTML = 'Ratigüeya'
        alert('CPU HA ESCOGIDO A RATIGÜEYA')
    } else if(mascotaAleatoria == 4) {
        spanMascotaCPU.innerHTML = 'Langostelvis'
        alert('CPU HA ESCOGIDO A LANGOSTELVIS')
    } else if(mascotaAleatoria == 5) {
        spanMascotaCPU.innerHTML = 'Tucapalma'
        alert('CPU HA ESCOGIDO A TUCAPALMA')
    } else {
        spanMascotaCPU.innerHTML = 'Pydos'
        alert('CPU HA ESCOGIDO A PYDOS')
    } 
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes') // no es necesario, supongo que es buena práctica pa que todo quede con nombres bonitos y explicativos
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota lanzó ataque chupapija 1 (' + ataqueJugador + '), La mascota del enemigo lanzó defensa trola 2 (' + ataqueCPU + '), ' + resultado
    sectionMensajes.appendChild(parrafo) // en lugar de sectionMensajes se puede poner solo mensajes e igual funciona
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasCPU = document.getElementById('vidas-cpu')

    if (ataqueJugador == ataqueCPU) {
        crearMensaje('EMPATE 🫥')
    } else if((ataqueJugador == 'FUEGO' && ataqueCPU == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueCPU == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueCPU == 'AGUA')) {
        crearMensaje('GANASTE HDP 🥵')
        vidasCPU--
        spanVidasCPU.innerHTML = vidasCPU
    } else {
        crearMensaje('PERDISTE HDP 🥶')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'EL JUEGO SE ACABÓ Y ' + resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function revisarVidas() {
    if (vidasCPU == 0) {
        crearMensajeFinal('GANASTE')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('PERDISTE')
    }
}

function reiniciarJuego() {
    location.reload()
}


window.addEventListener('load', iniciarJuego)