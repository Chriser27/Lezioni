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
];

let demo = document.getElementById("demo");

for(let i = 0; i < nomiStudenti.length; i++){
    console.log(nomiStudenti[i]);
    demo.innerHTML += "<li>" + nomiStudenti[i] + "</li>";
}
