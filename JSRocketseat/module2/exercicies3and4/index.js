//-------------------// EXERCICES 3 AND 4//-------------------//


var names = ["Diego", "Gabriel", "Lucas"];

var container = document.querySelector('div.container')
var list = window.document.createElement('ul');

function setNameToList(names){
    for(name of names){
        list.appendChild(renderList(name))
    }
    container.appendChild(list)
}

function renderList(name){
    var li = window.document.createElement('li');
        li.innerText = name
    return li
}

function addName(){
    var input = document.querySelector('input[name=nome]')
   
    var name = renderList(input.value)
    list.appendChild(name)
    input.value = '';
}

setNameToList(names)