//vida inicial de jugador y enemigo
var vida = 100;
var vidaEnemigo = 100;
var mensaje;
var jugador;

//vida del enemigo
//function totalVidaEnemigo(){
//    var texto;
//    texto = "la vida de tu enemigo es: "+ vidaEnemigo;
//    document.getElementById('mensaje').innerHTML=texto;
//    console.log(texto);
//}

//vida del jugador
//function totalVidaJugador(){
//   var texto;  
//    texto = "tu vida es: "+ vida;
//   document.getElementById('mensaje').innerHTML=texto;
//    console.log(texto);
//}


function muestraVida(nombre, accion, resta) {
    if (vidaEnemigo <= 0){
        mensaje= "gano";
        turnos(mensaje);
        console.log(mensaje);
    }else{  
    mensaje = "Has atacado con " + nombre + ", Tu enemigo se ha defendido con " + accion + ", se restara a la vida de tu enemigo " + resta;
    document.getElementById('mensaje').innerHTML=mensaje;
    console.log(mensaje);
    turnos(1);
}   
}

function muestraDefensa(nombre, accion, resta) {
    if (vida <= 0){
      mensaje = "perdio";
        turnos(mensaje);
        console.log(mensaje);
    }else{ 
    mensaje = "Te has defendido con " + nombre + ", Tu enemigo te ha atacado con " + accion + ", se restara a tú vida " + resta;
    document.getElementById('mensaje').innerHTML=mensaje;
    turnos(2);
    console.log(mensaje);
    }
}

function ataqueJugador(ataque, nombreAtaque) {
    var defensa = Math.floor(Math.random() * 4);
    //ataque de agua
    if (ataque == 10) {
        if (defensa == 0) {
            vidaEnemigo -= 10;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "agua", 10);
        } else if (defensa == 1) {
            vidaEnemigo -= 20;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "fuego", 20);
        } else if (defensa == 2) {
            vidaEnemigo -= 0;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "aire", 0);
        } else {
            vidaEnemigo -= 5;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "tierra", 5);
        }
        //ataque de aire
    } else if (ataque == 30) {
        if (defensa == 0) {
            vidaEnemigo -= 5;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "agua", 5);
        } else if (defensa == 1) {
            vidaEnemigo -= 0;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "fuego", 0);
        } else if (defensa == 2) {
            vidaEnemigo -= 20;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "aire", 20);
        } else {
            vidaEnemigo -= 10;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "tierra", 10);
        }
        //ataque de fuego
    } else if (ataque == 60) {
        if (defensa == 0) {
            vidaEnemigo -= 0;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "agua", 0);
        } else if (defensa == 1) {
            vidaEnemigo -= 10;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "fuego", 10);
        } else if (defensa == 2) {
            vidaEnemigo -= 5;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "aire", 5);
        } else {
            vidaEnemigo -= 20;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "tierra", 20);
        }

    }
    //ataque de tierra
    else if (ataque == 70) {
        if (defensa == 0) {
            vidaEnemigo -= 20;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "agua", 20);
        } else if (defensa == 1) {
            vidaEnemigo -= 5;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "fuego", 5);
        } else if (defensa == 2) {
            vidaEnemigo -= 10;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "aire", 10);
        } else {
            vidaEnemigo -= 0;
             verificarVidaJugador(vidaEnemigo);
            muestraVida(nombreAtaque, "tierra", 0);
        }

    }
}

function defensaJugador(defensa, nombreDefensa) {
    var ataque = Math.floor(Math.random() * 4);
    //defensa de agua
    if (defensa == 10) {
        if (ataque == 0) {
            vida -= 10;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "agua", 10);
        } else if (ataque == 1) {
            vida -= 0;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "fuego", 0);
        } else if (ataque == 2) {
            vida -= 5;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "aire", 5);
        } else {
            vida -= 20;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "tierra", 20);
        }
//defensa de aire
    } else if (defensa == 30) {
        if (ataque == 0) {
            vida -= 0;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "agua", 0);
        } else if (ataque == 1) {
            vida -= 5;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "fuego", 5);
        } else if (ataque == 2) {
            vida -= 20;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "aire", 20);
        } else {
            vida -= 10;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "tierra", 10);
        }
//defensa de fuego
    } else if (defensa == 60) {
        if (ataque == 0) {
            vida -= 20;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "agua", 20);
        } else if (ataque == 1) {
            vida -= 10;
            verificarVidaJugador(vida)
            muestraDefensa(nombreDefensa, "fuego", 10)
        } else if (ataque == 2) {
            vida -= 0;
            verificarVidaJugador(vida)
            muestraDefensa(nombreDefensa, "aire", 0)
        } else {
            vida -= 5;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "tierra", 5);
        }
//defensa de tierra
    } else if (defensa == 70) {
        if (ataque == 0) {
            vida -= 5;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "agua", 5);
        } else if (ataque == 1) {
            vida -= 20;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "fuego", 20);
        } else if (ataque == 2) {
            vida -= 10;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "aire", 10);
        } else {
            vida -= 0;
            verificarVidaJugador(vida);
            muestraDefensa(nombreDefensa, "tierra", 0);
        }

    }
}

function turnos(jugador) {

    var ataque = document.getElementById("ataque1");
    var defensa = document.getElementById("defensa1");
    var mensaje = document.getElementById("mensaje");
    var ganador = document.getElementById("ganador");
    var perdedor = document.getElementById("perdedor");
    var jugador1 = document.getElementById("jugador");
    var enemigo = document.getElementById("enemigo");
    var megumin = document.getElementById("megumin");
    var ainz = document.getElementById("ainz");
//
    if(jugador === 1){
        jugador1.style.display = "block";
        enemigo.style.display = "block";   
        ataque.style.display = "none";
        defensa.style.display = "block";
        mensaje.style.display = "block";
        ainz.style.display = "block";
        megumin.style.display = "block";
        jugador = 2;
    }else if(jugador === 2){
        enemigo.style.display = "block";
        jugador1.style.display = "block"; 
        ataque.style.display = "block";
        defensa.style.display = "none";
        mensaje.style.display = "block";
        ainz.style.display = "block";
        megumin.style.display = "block";
        jugador = 1;
    }else if(jugador === "perdio"){
        jugador1.style.display = "none";
        enemigo.style.display = "block"; 
        ataque.style.display = "none";
        mensaje.style.display = "none";
        defensa.style.display = "none";
        perdedor.style.display = "block";
        jugadoractual = "gano";
    }else if(jugador === "gano"){
        enemigo.style.display = "none";
        jugador1.style.display = "block"; 
        ataque.style.display = "none";
        mensaje.style.display = "none";
        defensa.style.display = "none";
        ganador.style.display = "block";
        jugadoractual = "perdio";
    }
}

function verificarVidaJugador(){
    var vidaJugadorBarra = document.getElementById('vidaJugador');
    var vidaEnemigoBarra = document.getElementById('vidaEnemigo');
    var vidaActualJugador = vida;
    console.log(vidaActualJugador);
    var vidaActualEnemigo = vidaEnemigo;
    console.log(vidaActualEnemigo);
    vidaJugadorBarra.style.width = vidaActualJugador+'%';
    vidaEnemigoBarra.style.width = vidaActualEnemigo+'%';
    var vidaJugadorBarra1 = vidaActualJugador+'%';
    document.getElementById('vidaJugador').innerHTML=vidaJugadorBarra1;
    var vidaEnemigoBarra1 = vidaActualEnemigo + '%';
    document.getElementById('vidaEnemigo').innerHTML=vidaEnemigoBarra1;
}


