let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarInteto(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeusuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos}${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeusuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

        //si el numero generado se encuentra en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del nuemero secreto!');
    asignarTextoElemento('p',`Indica un nuemro del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego(){
  //limpiar la caja 
  limpiarCaja();
  //indicar mensaje de intervalo de numeros 
  condicionesIniciales();
  //generar el numero aleatorio
  //inicializar el numero de intentos 
  //dejar el boton de nuevo juego desavilitado
   document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

condicionesIniciales();