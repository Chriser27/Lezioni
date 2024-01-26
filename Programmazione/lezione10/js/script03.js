let voti = [100, 20, 50, 60, 65, 55, 80, 90];

let demo = document.getElementById("demo");

    // voglio controllare i singoli nomi: quando superano i 15 caratteri allora metti un asterisco

    // il .length sulle parole conta i caratteri

    for(let i = 0; i < voti.length; i ++){
        if(voti[i] == 100){
            demo.innerHTML += "<li>" + voti[i] + " AAA. </li>";
        }else if(voti[i] >= 60){
            demo.innerHTML += "<li>" + voti[i] + " A. </li>";
        }else{
            demo.innerHTML += "<li>" + voti[i] + " *. </li>";
        }
    }

