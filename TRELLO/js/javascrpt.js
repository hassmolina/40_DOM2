function todoList() {
    var inputcaja = document.getElementById("cajitalista");
    var textolista = document.createElement("input");//PASAR A LA SIGUIENTE FUNCION LO QUE DICE EN LA CAJA
    inputcaja.appendChild(textolista);
    var botonlista = document.createElement("button");
    inputcaja.appendChild(botonlista);
    var textoboton = document.createTextNode("Guardar");
    botonlista.appendChild(textoboton);

    botonlista.onclick = function() {
        var div = document.createElement("div"); //NUEVO DIV
        var divGuardarTexto = textolista.value; //GUARDARA TODO LO QUE TIENE MI INPUT QUE ES MI GUARDAR, MI INPUT Y LA LISTA
        var guardarTexto = document.createTextNode(divGuardarTexto);
        div.appendChild(guardarTexto);
        inputcaja.appendChild(div);

//2 BOTONES
  //BOTON AÑADIR TARJETA
  var botontarjeta = document.createElement("button");
  var textobotontarjeta = document.createTextNode("Añadir una tarjeta");
  botontarjeta.appendChild(textobotontarjeta);
  inputcaja.appendChild(botontarjeta);

    //BOTON AÑADIR OTRA LISTA
    var botonotralista = document.createElement("button");
    var textobotonlista = document.createTextNode("Añadir una lista");
    botonotralista.appendChild(textobotonlista);
    inputcaja.appendChild(botonotralista);

    botonotralista.onclick = function(){
      var textareanuevalista = document.createElement("textarea");
      textareanuevalista.setAttribute("textarea", "autofocus");
      inputcaja.appendChild(textareanuevalista);

      var botonguardarotralista = document.createElement("button");
      var textobotonotralista = document.createTextNode("Guardar");
      botonguardarotralista.appendChild(textobotonotralista);
      inputcaja.appendChild(botonguardarotralista);

      var guardarlistanueva = function(){
        var ol = document.createElement("ol");

      }

    }


    }



}
