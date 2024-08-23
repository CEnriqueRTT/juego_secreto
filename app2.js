/* 
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto!";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10:"; 
*/

function asignarTextoAelementoHTML(elementoHTML, texto){
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = texto;
    return;

}
asignarTextoAelementoHTML('h1', 'Juego del número secreto!');
asignarTextoAelementoHTML('p', 'Indica un número del 1 al 10:');

let listaDeNumerosSorteados = [];
let NumeroSecreto = 0;
let = numeroMaximo = 10;
function generarNumeroAleatorio(){
    let numeroAleatorioGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaDeNumerosSorteados);
    //console.log('La lista de números sorteados es: ' + listaDeNumerosSorteados.join(', '));
    console.log(numeroAleatorioGenerado);
    //console.log('El número aleatorio es: ' + numeroAleatorioGenerado + ', este es el número secreto');
    //Si ya sortemaos todos los números
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoAelementoHTML('p', 'Ya se sortearon todos los números posibles');
    }else{
        //Si el número aleatorio generado está incluido en la lista
        if(listaDeNumerosSorteados.includes(numeroAleatorioGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaDeNumerosSorteados.push(numeroAleatorioGenerado);
            return numeroAleatorioGenerado;
        }
    }
}

let intentos = 0;
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    //console.log('El número de usuario es: ' + numeroDeUsuario + ', Este número es de tipo: ' + typeof(numeroDeUsuario));
    //console.log('El número secreto es: ' + NumeroSecreto + ', Este número es de tipo: ' + typeof(NumeroSecreto));
    //console.log("La respuesta es: " + (numeroDeUsuario === NumeroSecreto));
    if(numeroDeUsuario === NumeroSecreto){
        asignarTextoAelementoHTML('p', `Acertaste el número en: ${intentos} ${(intentos === 1) ? ' vez' : ' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó el número secreto
        if(numeroDeUsuario > NumeroSecreto){
            asignarTextoAelementoHTML('p', 'El número secreto es menor');
        }else{
            asignarTextoAelementoHTML('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput(){
    document.querySelector('#valorDeUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoAelementoHTML('h1', 'Juego del número secreto!');
    asignarTextoAelementoHTML('p', `Indica un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroAleatorio();
    //console.log('El número aleatorio es: ' + NumeroSecreto + ', este es el número secreto');
    intentos = 1;
}

function reiniciarJuego(){
    //1. Limpiar el Input
    limpiarInput();
    //2. Indicar el mensaje de intervalo de números
    //3. Generar el número aleatorio
    //4. Inicializar el número de intentos
    condicionesIniciales();
    //5. Deshabilitar el botón de "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
