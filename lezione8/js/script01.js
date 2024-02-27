let username = "Christian";
let password = "canalosauro";
let statoAccesso = false;
let tipoAccount = "Premium";

if(username == "Christian" && password == "canalosauro"){
    console.log("Benvenuto " + username);
    statoAccesso = true; 
}else if(username != "Christian" && password == "canalosauro"){
    console.log("Mi dispiace questo username non è registrato");
}else if(username == "Christian" && password != "canalosauro"){
    console.log("Mi spiace la password è errata");
}else{
    console.log("Scusa ma non ti conosco " + username + ", non puoi accedere");
}

if(statoAccesso == true && tipoAccount == "Premium"){
    console.log("Hai accesso a tutti i contenuti della piattaforma");
}
else if(statoAccesso == true && tipoAccount == "Base"){
    console.log("Hai accesso a tutti i contenuti Base della piattaforma");
}
else if(statoAccesso == true && (tipoAccount != "Base" || tipoAccount != "Premium")){
    console.log("Non hai ancora scelto un tipo di Account");
}
else{
    console.log("Non hai ancora effettuato l'accesso");
}

