//-------------------// EXERCICES 3 AND 4//-------------------//


var names = ["Diego", "Gabriel", "Lucas"];

var container = document.querySelector('div.container')
var list = window.document.createElement('ul');
var input = document.querySelector('input[name=nome]')


function renderList(){
    list.innerHTML = '';
    for(name of names){
        var li = window.document.createElement('li');
        var text = document.createTextNode(name)
        li.appendChild(text)
        list.appendChild(li)
    }
    container.appendChild(list)
}

function addName(){
    names.push(input.value)
    input.value = '';
    renderList()
}

renderList()