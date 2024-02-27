// Es.1 - Dati 2 numeri scrivi un programma in JS che mostra il più grande tra i due

let numero1 = 2;
let numero2 = 7; 

if (numero1 > numero2) {
    console.log(numero1 + "è maggiore di " + numero2 + ".");    
}else { 
    console.log(numero2 + " è maggiore di " + numero1 + ".");
}

// Es.2 - Dati solo 3 nomi User verifica che tutti e 3 siano corretti. Quando uno o più sono sbagliati avvisa la console

let nome1 = "Filippo";
let nome2 = "Canalo";
let nome3 = "Christian";

if (nome1 == "Filippo" && nome2 == "Canalo" && nome3 == "Christian"){
    console.log("I nomi inseriti sono esatti");
}else {
    console.log("Sbagliato, ricontrolla i nomi");
}


// Es.3 - Dati 2 numeri compresi tra 0 e 100 verifica chi è più vicino al 100

let numero01 = 20;
let numero02 = 70;

if(numero01 > numero02 && numero01 < 100){
    console.log(numero01 + " è più vicino al 100");
}else if(numero02 > numero01 && numero02 < 100){
    console.log(numero02 + " è più vicino al 100");
}else {
    console.log("Tutti i numeri sono superiori al 100");
}

// Es.4 - Dati 2 numeri compresi tra 0 e 200 verifica chi è il più vicino al 100
 
let numero001 = 120;
let numero002 = 70;
let differenza1 = 100 - numero001;
let differenza2 = 100 - numero002; 

if (Math.abs(differenza1) < Math.abs(differenza2) && numero001 > 100 && numero001 < 0 && numero002 > 100 && numero002 < 0){
    console.log(numero001 + " è più vicino a 100.");
}else if (Math.abs(differenza2) < Math.abs(differenza1) && numero001 > 100 && numero001 < 0 && numero002 > 100 && numero002 < 0) {
    console.log(numero002 + " è più vicino a 100.");
}else if (Math.abs(differenza1) == Math.abs(differenza2) && numero001 > 100 && numero001 < 0 && numero002 > 100 && numero002 < 0){
    console.log("I numeri sono egualmente vicini a 100.");
}else {
    console.log("I numeri inseriti non rispettano le condizioni assegnate.");
}

// Es.4 eseguito da ChatGPT

function numeroPiùVicinoA100(numero0001, numero0002) {
    let distanzaDa100_1 = Math.abs(numero0001 - 100);
    let distanzaDa100_2 = Math.abs(numero0002 - 100);

    if (distanzaDa100_1 < distanzaDa100_2) {
        return numero0001;
    } else if (distanzaDa100_2 < distanzaDa100_1) {
        return numero0002;
    } else {
        return "I due numeri sono alla stessa distanza da 100.";
    }
}

let numero0001 = 75;
let numero0002 = 120;
let piùVicino = numeroPiùVicinoA100(numero0001, numero0002);
console.log("Il numero più vicino a 100 è:", piùVicino);





