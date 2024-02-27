
let demo = document.getElementById("demo");

let dati = document.getElementById("dati");
let somma = document.getElementById("somma");
let differenza = document.getElementById("differenza");
let prodotto = document.getElementById("prodotto");
let quoziente = document.getElementById("quoziente");

let numero1 = Number(window.prompt("inserisci il primo Numero"));
let numero2 = Number(window.prompt("Inserisci il secondo Numero"));

let risSomma = numero1 + numero2; 
let risDifferenza = numero1 - numero2; 
let risProdotto = numero1 * numero2; 
let risQuoziente = numero1 / numero2; 

dati.innerHTML = "<h2> I numeri di partenza sono: " + numero1 + " e " + numero2 + "</h2>"; 
somma.innerHTML = "<p> La somma vale: " + risSomma + "</p>";
differenza.innerHTML = "<p> La differenza vale: " + risDifferenza + "</p>";
prodotto.innerHTML = "<p> Il Prodotto vale: " + risProdotto + "</p>";
quoziente.innerHTML = "<p> Il quoziente vale: " + risQuoziente + "</p>";

