// var inputcaja = document.getElementById(nombreDiv.id);
function todoList() {
    //alert(nombreDiv);

    var divPrincipal = document.getElementById('divPrincipal');
    var divLista = document.createElement("div");
      divLista.setAttribute("id","divLista")
      divLista.setAttribute("class", "inline")
    var textolista = document.createElement("input"); //PASAR A LA SIGUIENTE FUNCION LO QUE DICE EN LA CAJ
      textolista.setAttribute("id", "txtLista");
    var botonlista = document.createElement("button");
      botonlista.setAttribute("id", "btnLista");
    var textoboton = document.createTextNode("Guardar");
    botonlista.appendChild(textoboton);
    divLista.appendChild(textolista);
    divLista.appendChild(botonlista);
     divPrincipal.appendChild(divLista);


      //  document.getElementById("btnInicio2").style.display = 'none';

  document.getElementById("btnInicio").style.display = 'none';

    botonlista.onclick = function() {
        var div = document.createElement("div"); //NUEVO DIV
        var divGuardarTexto = textolista.value; //GUARDARA TODO LO QUE TIENE MI INPUT QUE ES MI GUARDAR, MI INPUT Y LA LISTA
        var guardarTexto = document.createTextNode(divGuardarTexto);
        div.appendChild(guardarTexto);
        divLista.appendChild(div);

        //Ocultamos elementos ya utilizados
        // document.getElementById("btnInicio2").style.display = 'none';
        document.getElementById("txtLista").style.display = 'none';
        document.getElementById("btnLista").style.display = 'none';
        document.getElementById("btnInicio").style.display = 'none';


        //2 BOTONES
        //BOTON AÑADIR TARJETA
        var botontarjeta = document.createElement("button");
        botontarjeta.setAttribute("div", "btntarjeta")
        var textobotontarjeta = document.createTextNode("Añadir una tarjeta");
        botontarjeta.appendChild(textobotontarjeta);
        divLista.appendChild(botontarjeta);

        botontarjeta.onclick = function() {

            var divbotontarjeta = document.createElement("div");
            var textotarjeta = document.createElement("textarea");
            textotarjeta.setAttribute("id", "eltxt")
            divbotontarjeta.appendChild(textotarjeta);
            var btnTarjetaGuardar = document.createElement("button");
            var txtBtnTarjeta = document.createTextNode("Guardar");
            btnTarjetaGuardar.appendChild(txtBtnTarjeta);
            divLista.appendChild(divbotontarjeta);
            divbotontarjeta.appendChild(btnTarjetaGuardar);


            btnTarjetaGuardar.onclick = function() {
                var divtarjeta = document.createElement("div");
                var parrafo = document.createElement("p");
                var parrafoTexto = textotarjeta.value;
                var parrafoNodo = document.createTextNode(parrafoTexto);
                parrafo.appendChild(parrafoNodo);
                divbotontarjeta.appendChild(parrafo);
                textotarjeta.value = "";
                var ganaFoco = document.getElementById("eltxt");
                ganaFoco.focus();
                ganaFoco.scrollIntoView();
                divtarjeta.appendChild(parrafo);
                divLista.appendChild(divtarjeta);

                botontarjeta.style.display = 'none';
            }
        }
    }
    //
    // // var str = nombreDiv.id;
    // var pieces = str.split(/[\s_]+/);
    // var contador = 0;
    // contador = parseInt(pieces[pieces.length - 1]) + 1;
    var siguiteInput = document.createElement("input");
    // siguiteInput.setAttribute("id", "btnInicio" + contador.toString());
    siguiteInput.setAttribute("type", "button");
    siguiteInput.setAttribute("value", "Añadir Lista ");
    // var nombreDivSiguiente = "cajitalista_" + contador.toString();
    // nombreDivSiguiente.setAttribute("class", "inline")
    siguiteInput.setAttribute("onclick", "todoList()"  )
        // <input id="btnInicio" type="button" value="Añadir Lista" onclick="todoList(cajitalista1)">
    var siguienteDiv = document.createElement("div");
    // siguienteDiv.setAttribute("id", nombreDivSiguiente);
    divPrincipal.appendChild(siguiteInput);
    divPrincipal.appendChild(siguienteDiv);
  //  siguienteDiv.appendChild(siguiteInput);
}
