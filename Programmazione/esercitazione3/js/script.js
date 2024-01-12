let nome = "Christian";
let cognome = "Spitaleri";
let annonascita = 2006;
let annocorrente = 2023;
let giornialnatale = window.prompt("Quanti giorni mancano a Natale?");
let anni = annocorrente - annonascita;

console.log("Ciao! Sono " + nome + " " + cognome + ", sono nato nel " + annonascita + " oggi siamo nel " + annocorrente + " e mancano " + giornialnatale + " giorni a natale! ");

console.log(" Ho " + anni + " anni ");

if (giornialnatale == 0){
    console.log("Buon Natale!");
} else if (giornialnatale >= 7){
    console.log("Manca più di una settimana!");
} else {
    console.log("Manca pochissimo!");
};
