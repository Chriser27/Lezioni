for(let i = 0; i < 3; i ++ ){
    console.log("Ciao dal giro num " + i);
}

// adesso il ciclo parte da 1 e arriva a 10 
for(let i = 1; i <= 10; i ++){
    console.log("Sono le ore: " + i);
}

// I CICLI FOR SERVONO ANCHE A LEGGERE GLI ARRAY 
// gli array sono una struttura dati nella quale è possibile salvare elementi simili tra loro. Praticamente è un contenitore 

// dichiaro un array. Gli array hanno la caratteristica di essere 0-based
let colori = ["rosso", "giallo", "verde", "blu"];

// Richiamo i singoli colori
console.log(colori[0] ); //rosso
console.log(colori[1] ); //giallo
console.log(colori[2] ); //verde
console.log(colori[3] ); //blu
console.log(colori[4] ); //undefined

console.log("Nell'array ci sono: " + colori.length);

for(let i = 0; i < colori.length; i++){
    console.log(colori[i]);
}
