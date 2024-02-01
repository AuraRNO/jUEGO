let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados =[ ];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarIntento() {
   let numeroUsurio =parseInt(document.getElementById ("valorUsuario").value);
   
   if (numeroSecreto ===numeroUsurio) {
    asignarTextoElemento ("p", `acertaste el número  en ${intentos} ${(intentos ===1)?"vez": "veces"}`);
   document.getElementById ("reiniciar").removeAttribute("disabled")
} else { // el usuario no acertó
    if (numeroUsurio > numeroSecreto) {
        asignarTextoElemento("p", "el número secreto es menor");
    } else { asignarTextoElemento ("p", "el número secreto es mayor");}
   } 
   intentos++
   limpiarCaja();
   return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
     console.log (numeroGenerado);
     console.log(listaNumerosSorteados);
     
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se asignaron todos los numeros posibles");
  } else {

  

   // Si el numero generado está incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
} 

function limpiarCaja (params) {
    document.querySelector("#valorUsuario").value = "";
}
function condicionesInciales(params) {
    asignarTextoElemento("h1", "juego del número secreto!")
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto ();
    
    intentos =1;
 

}

function reiniciarJuego (params) {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesInciales();
    //Deshabilitar el bóton de nuevo juego
   document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesInciales();