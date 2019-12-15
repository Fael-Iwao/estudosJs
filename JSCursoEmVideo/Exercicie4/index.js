const validate = window.document.getElementById('validate');
const number = window.document.getElementById('number');
const response = window.document.getElementById('response') 

validate.onclick = () => {
    if(number.value.length == 0) return alert('[ERRO] Digite um Valor');

    let num = Number(number.value);
    let count = 1;
    response.innerHTML = '';
    while(count <= 10){
        let item = window.document.createElement('option');
            item.text = `${num} x ${count} = ${num * count}`;
       
        response.appendChild(item);
        count++;
    }
    
}