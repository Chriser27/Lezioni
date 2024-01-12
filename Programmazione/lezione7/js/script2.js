//Simulazione Videogame

//punteggi utente
let score = 80; 
let exp = 50; 

//Per superare il livello del gioco lo score deve essere maggiore di 60 e l'esperienza deve essere maggiore di 45

//if(score >= 60 && exp >=45){
//    console.log("Bravo, hai superato il livello !");
//}else{
//    console.log("Mi dispiace, riprova");
//}

if (score >= 60 && exp >= 45){
    console.log("Bravo, hai superato il livello");
    
}else if(score < 60 && exp >= 45){
    console.log("Mi spiace ma il tuo score è sotto la soglia. La tua exp va bene ma non è sufficiente a passare il livello");
}else if(score >= 60 && exp < 45){
    console.log("Mi spiace la tua exp è sottosoglia. Il tuo score va bene ma non è sufficiente a passare il livello");
}else {
    console.log("Non hai superato il livello perchè entrambi i punteggi sono sotto soglia");
}

// EASY MODE - OR Logico 
// L'utente passa il livello anche con un solo punteggio sopra la soglia

