// OPERATORI DI CONFRONTO
// Tutte le volte che uso un operatore di confronto genero un tipo booleano

let num1 = 10;
let num2 = 10;

// Confronto i due numeri
//  == è uguale a 
let confronto1 = (num1 == num2);
console.log(confronto1);

// != Non è uguale a
let confronto2 = (num1 != num2); 
console.log(confronto2);

// > Maggiore < Minore
let confronto3 = (num1 > num2);
let confronto4 = (num1 < num2);

// >= e <=
let confronto5 = (num1 >= num2);
let confronto6 = (num1 <= num2);

// TUTTE QUESTE VARIABILI DI CONFROTNO POSSONO ESERE UTILIZZATE NEGLI IF

let mioNome = "Christian";
let tuoNome = "christian";

let confronto7 = (mioNome != tuoNome); // true, poichè javascript è CASE-SENSITIVE


// ESEMPIO IF 

let etaBugiland = 18; 

let etaAccesso = 18;

if(etaBugiland >= etaAccesso) {
    //Questa parte viene eseguita solo se la condizione è vera
    console.log("Benvenuto Alessio, puoi entrare !");
}else{
    //Questa parte viene eseguita solo se la condizione è falsa-
    console.log("Mi dispiace Alessio, torna a casa !");
}

//Faccio un altro controllo
let meteo = "Sole";

if (meteo == "Sole"){ 
    console.log("Oggi c'è il sole, metto gli occhiali scuri");
}else if(meteo == "Pioggia"){
    console.log("Oggio piove, porta l'ombrello !");
}else if(meteo == "Nebbia"){
    console.log("Stai a casa che non si vede una mazza !");
}else if(meteo == "Neve"){
    console.log("Attenzione oggi nevica, potresti scivolare !");
}else{
    console.log("Non sono in grado di darti nessuna informazione");
}

//ATT: gli if si chiudono sempre con un else