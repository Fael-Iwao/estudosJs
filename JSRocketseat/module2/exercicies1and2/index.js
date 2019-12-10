//-------------------// EXERCICES 1 AND 2//-------------------//

var container = document.querySelector('div.container')
var btnSquare = document.querySelector('button.btnSquare');


    btnSquare.onclick = function(){
        var square = document.createElement('div');
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = '#f00';
        square.style.margin = '10px';
        square.style.display = 'inline-block';
        // square.setAttribute('class', 'square')
        square.setAttribute('onmouseover', 'switchColor(this)')

        container.appendChild(square)
    }

    

function switchColor(square){
    var newColor = getRandomColor();
    square.style.backgroundColor = newColor;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


