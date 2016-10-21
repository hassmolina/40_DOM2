function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.style.backgroundColor = "#17d487";
    newItem.style.fontFamily = "Meyrio";
    newItem.style.fontSize = "20px";
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    document.getElementById('todoList').appendChild(newItem);
    var icono = document.createElement("i");
    icono.setAttribute("class", "fa fa-trash");
    icono.style.marginLeft = "300px";
    newItem.appendChild(checkbox);
    newItem.appendChild(text)
    newItem.appendChild(icono);

//TEXTO EN BLANCO


    //ELIMINAR
    icono.onclick = function() {
        newItem.parentElement.removeChild(newItem);
    }

    //TACHAR
    checkbox.onclick = function() {
        if (checkbox.checked == true) {
            text.parentElement.setAttribute("class", "linea");
        } else {
          text.parentElement.setAttribute("class", "");
        }
    }

}
