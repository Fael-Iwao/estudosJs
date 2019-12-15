
const load = () => {
    
    const message = window.document.getElementById('message');
    const img = window.document.getElementById('img');

    const date = new Date();

    var hour = date.getHours();

    message.innerHTML = `Agora são ${hour} Horas`

    if( hour >= 0 && hour <= 12 ){
        img.src = 'img/morning.png';
        document.body.style.background = '#d7bfaa';
    }
    else if( hour >=13 && hour <= 18){
        img.src = 'img/afternoon.png';
        document.body.style.background = '#d86815';
    }else{
        img.src = 'img/night.png';
        document.body.style.background = '#172f37';
    }
}



window.onload = () => load()