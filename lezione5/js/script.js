
let mioNome = "Christian";

let mioCognome = "Spitaleri";

let eta = 17;

//l'operatore + viene utilizzato per concatenare le stringhe

let saluto = "Ciao " + mioNome + " " + mioCognome + ", hai " + eta + " anni";


//  alert(saluto); 


// sistema alternativo per definire una stringa 
// il simbolo ` si fa con alt+96

let saluto2 = `Ciao ${mioNome} ${mioCognome}, hai ${eta} anni`;

//  alert(saluto2);


//1. selezione l'elemento nello html in cui voglio stampare qualcosa
// ATT: la stringa "elSaluto" deve essere identica all'ID
let elSaluto = document.getElementById("elSaluto");

// 2. Stampo nell'elSaluto la mia variabile
elSaluto.innerHTML = saluto2; 



// let num1 = 5; 
// let num2 = 8; 

// let prodotto = num1 * num2;

// alert(`Il risultato è ${prodotto}`);

let elDemo = document.getElementById("elDemo");

let titoloDemo = "<h2> Calcolatrice </h2>"; 

let introDemo = "<p> Questa calcolatrice esegue solo il prodotto </p>";

elDemo.innerHTML = titoloDemo + introDemo;

//  elFeed riempito direttamente, senza variabili 

let elFeed = document.getElementById("elFeed"); 

//  inner.HTML legge / scrive testo con HTML

elFeed.innerHTML = `
        <h2>Lista Studenti</h2> 
        <ul> 
            <li>Marco</li>
            <li>Cristian</li>
            <li>Nouha</li>
            <li>Osman</li>
            <li>Nicolò</li>
            <li>Giacomo</li>
            <li>Christian</li>
        </ul>`