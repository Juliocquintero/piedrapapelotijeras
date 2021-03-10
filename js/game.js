    var user;
//     var rock = 1;
//     var paper = 2;
//     var scissors = 3;
    var titulo = document.getElementById("tituloH1");
    var piedraBoton = document.getElementById("piedra");
    var papelBoton = document.getElementById ("papel");
    var tijerasBoton = document.getElementById ("tijeras");
    var gameContainer = document.getElementById ("game-container")
    var resultado = document.getElementById("resultado");
    var resultadoImgWin = document.getElementById("resultadoImgWin");
    var resultadoImgTie = document.getElementById("resultadoImgTie");
    var resultadoImgLoose = document.getElementById("resultadoImgLoose");
    var resultadoText = document.getElementById("resultadoH2");

//     function opcionPiedra() {
//         user = rock;
//     };

//     function opcionPapel() {
//         user = paper;
//     };

//     function opcionTijeras() {
//         user = scissors;
//     };



    piedraBoton.addEventListener("click", () => play ("piedra"));

    papelBoton.addEventListener("click", () => play ("papel"));
    
    tijerasBoton.addEventListener("click", () => play ("tijeras"));

    var win = function () {
        resultado.style.display = "block";
        gameContainer.style.display = "none";
        titulo.textContent = "Resultado:";
        titulo.style.fontSize = "3.5rem";
        resultadoImgWin.style.display = "block";
       };
    
    var tie = function () {
        resultado.style.display = "block";
        gameContainer.style.display = "none";
        titulo.textContent = "Resultado:";
        resultadoText.textContent = "¡Empate!";
        titulo.style.fontSize = "3.5rem";
        resultadoImgTie.style.display = "block";
       };
    
    var loose = function () {
        resultado.style.display = "block";
        gameContainer.style.display = "none";
        titulo.textContent = "Resultado:";
        resultadoText.textContent = "Haz perdido :(";
        titulo.style.fontSize = "3.5rem";
        resultadoImgLoose.style.display = "block";
       };



function jugadapc(){
    var opciones = ["piedra", "papel", "tijeras"];
    var random = Math.floor(Math.random() * 3);
    var jugada = opciones [random]
    return jugada;
}

function play (opcion){
    var pc =  jugadapc();
    var user = opcion;
    if (user == pc) {
        tie();
    } else if (user == "piedra" && pc == "tijeras"){
        win ();
    } else if (user ==  "papel" && pc == "piedra"){
        win();
    } else if (user == "tijeras" && pc == "piedra"){
        win();
    } else {
        loose();       
}
// alert ("usuario: "+opcion+" | computadora:" +pc)
}






    