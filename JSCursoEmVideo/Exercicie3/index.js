const validate = window.document.getElementById('validate');
const elInit = window.document.getElementById('init');
const elEnd = window.document.getElementById('end');
const elStep = window.document.getElementById('step');
const response = window.document.getElementById('response');


validate.onclick = () => {
    var init = Number(elInit.value);
    var end = Number(elEnd.value);
    var step = Number(elStep.value);

    if(step <= 0  || init <= 0 || end <= 0 ) return response.innerHTML = 'impossivel contar';
    
    response.innerHTML = ''
    if( end > init && end > 0){
        for(var i = init; i <= end; i += step ){
            response.innerHTML += ` ${i} \u{1F449}`;
           
        }
        response.innerHTML += ` \u{1F3C1}`
    }else{
        for(var i = init; i >= end; i -= step ){
            response.innerHTML += ` ${i} \u{1F449}`;
           
        }
        response.innerHTML += ` \u{1F3C1}`
    }

    
}