//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntenos = 6;

console.log("El número secreto es: " + numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    console.log(typeof(numeroUsuario));
    /*
    Este código realiza 
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Cuando la condición es verdad
        //Se utiliza "Template String"
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); //Interpolación con comillas invertidas (AltGr+])
    } else {
        //Cuando la condición es falsa
        //alert('Lo siento, no acertaste el número')
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert ("El número secreto es mayor");
        }
        //Se incrementa el contador, cuando no se acierta el "numeroSecreto"
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
        //palabraVeces = "veces";
        if (intentos > maximoIntenos) {
            alert(`Llegaste al número máximo de ${maximoIntenos} intentos`);
            break;
        }
    }
}
