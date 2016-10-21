function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.style.backgroundColor = "#17d487";
    
    newItem.style.fontFamily = "Helvetica";
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    document.getElementById('todoList').appendChild(newItem);
    var icono = document.createElement("i");
    icono.setAttribute("class", "fa fa-trash");
    newItem.appendChild(checkbox);
    newItem.appendChild(text)
    newItem.appendChild(icono);

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
