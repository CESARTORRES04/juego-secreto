let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intento);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intento} ${intento===1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto.
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intento++;
        limpiarCaja();
    }
    return;

}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length ==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
            //Si el número generado se incluye en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();


