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
    piedraBoton.addEventListener("click", () => play ("Piedra")); // Boton para seleccionar Piedra, este le envia sus datos a play

    papelBoton.addEventListener("click", () => play ("Papel"));  // Boton para seleccionar Papel, este le envia sus datos a play
    
    tijerasBoton.addEventListener("click", () => play ("Tijeras")); // Boton para seleccionar Tijeras, este le envia sus datos a play

    //Resultados

    var win = function () {
        resultado.style.display = "block"; //este comando, hace que el div resultado se muestre en pantalla, ya que por defecto esta en display none.
        gameContainer.style.display = "none"; //este comando, hace que el div de las opciones se oculte de pantalla, para que los resultados tomen su lugar
        titulo.textContent = "Resultado:"; // Este comando cambia el titulo de Elegir de su estedo inicial al Resultado del estado del resultado.
        titulo.style.fontSize = "3.5rem"; //Este comando, cambia el tamaño del titulo, debido a que al ser mayor, en telefonos no se podra observar desde su estado inicial
        resultadoText.textContent = "¡HAS GANADO!"; // Este comando, cambia el texto del h2 donde se muestra si ganaste, empataste o perdiste. En este caso, ganaste.
        resultadoImgWin.style.display = "block"; // Este comando, cambia el display de la imagen que hace referencia a si ganaste o perdiste. En este caso, ganaste.
       };
    
    var tie = function () {
        resultado.style.display = "block"; //este comando, hace que el div resultado se muestre en pantalla, ya que por defecto esta en display none.
        gameContainer.style.display = "none"; //este comando, hace que el div de las opciones se oculte de pantalla, para que los resultados tomen su lugar
        titulo.textContent = "Resultado:"; // Este comando cambia el titulo de Elegir de su estedo inicial al Resultado del estado del resultado.
        titulo.style.fontSize = "3.5rem"; //Este comando, cambia el tamaño del titulo, debido a que al ser mayor, en telefonos no se podra observar desde su estado inicial
        resultadoText.textContent = "¡Empate!"; // Este comando, cambia el texto del h2 donde se muestra si ganaste, empataste o perdiste. En este caso, empataste.
        resultadoImgTie.style.display = "block";// Este comando, cambia el display de la imagen que hace referencia a si ganaste o perdiste. En este caso, empataste.
       };
    
    var loose = function () {
        resultado.style.display = "block"; //este comando, hace que el div resultado se muestre en pantalla, ya que por defecto esta en display none.
        gameContainer.style.display = "none"; //este comando, hace que el div de las opciones se oculte de pantalla, para que los resultados tomen su lugar
        titulo.textContent = "Resultado:"; // Este comando cambia el titulo de Elegir de su estedo inicial al Resultado del estado del resultado.
        titulo.style.fontSize = "3.5rem"; // Este comando, cambia el tamaño del titulo, debido a que al ser mayor, en telefonos no se podra observar desde su estado inicial
        resultadoText.textContent = "Haz perdido :("; // Este comando, cambia el texto del h2 donde se muestra si ganaste, empataste o perdiste. En este caso, perdiste.
        resultadoImgLoose.style.display = "block"; // Este comando, cambia el display de la imagen que hace referencia a si ganaste o perdiste. En este caso, perdiste.
       };

// Funcion de juego del computador:

function jugadapc(){ 
    var opciones = ["Piedra", "Papel", "Tijeras"]; // array compuessto por 3 componentes: Piedra, Papel o Tijeras
    var random = Math.floor(Math.random() * 3); // Se selecicona un numero entero random entre 0/2
    var jugada = opciones [random] // En esta funcion, se tomara el numero del array opciones, segun el resultado que seleccione la funcion de random. 0/1/2 | Piedra/Papel/Tijeras
    return jugada;
}

// Funcion del juego en sí.
function play (opcion){
    var pc =  jugadapc();
    var user = opcion;
    if (user == pc) { //cuando el usuario  y la maquina (funcion jugadapc) elijan lo mismo, sera empate y se muestra la funcion de tie.
        tie();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; //Esto hace que lo que yo eliga se muestre en un span del resultado
    } else if (user == "Piedra" && pc == "Tijeras"){ //cuando el usuario elija piedra y la maquina (funcion jugadapc) elija tijeras, el usuario ganara y mostrara la funcion win
        win ();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; //Esto hace que lo que yo eliga se muestre en un span del resultado
    } else if (user ==  "Papel" && pc == "Piedra"){ //cuando el usuario elija papel y la maquina (funcion jugadapc) elija piedra, el usuario ganara y mostrara la funcion win
        win();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; //Esto hace que lo que yo eliga se muestre en un span del resultado
    } else if (user == "Tijeras" && pc == "Papel"){//cuando el usuario elija tijeras y la maquina (funcion jugadapc) elija papel, el usuario ganara y mostrara la funcion win
        win();
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; //Esto hace que lo que yo eliga se muestre en un span del resultado
    } else {
        loose();      
        resultadoElegido.innerHTML = "Tu elegiste: "+opcion+" <br> La maquina eligió: " +pc; //Esto hace que lo que yo eliga se muestre en un span del resultado
}
// alert ("usuario: "+opcion+" | computadora:" +pc)
}






    