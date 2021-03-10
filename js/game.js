    //Variables
    var user;
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
    var resultadoElegido =document.getElementById("resultadoElegido")

    //Eventos
    piedraBoton.addEventListener("click", () => play ("Piedra"));

    papelBoton.addEventListener("click", () => play ("Papel"));
    
    tijerasBoton.addEventListener("click", () => play ("Tijeras"));

    //Resultados

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

// Funcion de juego del computador:

function jugadapc(){
    var opciones = ["Piedra", "Papel", "Tijeras"];
    var random = Math.floor(Math.random() * 3);
    var jugada = opciones [random]
    return jugada;
}

// Funcion del juego en sí.
function play (opcion){
    var pc =  jugadapc();
    var user = opcion;
    if (user == pc) {
        tie();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc;
    } else if (user == "Piedra" && pc == "Tijeras"){
        win ();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc;
    } else if (user ==  "Papel" && pc == "Piedra"){
        win();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc;
    } else if (user == "Tijeras" && pc == "Papel"){
        win();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc;
    } else {
        loose();      
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; 
}
// alert ("usuario: "+opcion+" | computadora:" +pc)
}






    