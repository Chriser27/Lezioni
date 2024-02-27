let nomiStudenti = [
    "Paolo",
    "Giovanna",
    "Anna",
    "Sarah",
    "Nicolò",
    "Christian",
    "Giacomo",
    "Nouha",
    "Filippo",
    "Dario",
    "Mario",
    "Marco",
    "Franco",
    "Federico",
    "Alberto",
];

let demo = document.getElementById("demo");

for(let i = 0; i < nomiStudenti.length; i++){
    demo.innerHTML += "<li>" + nomiStudenti[i] + "</li>";
}