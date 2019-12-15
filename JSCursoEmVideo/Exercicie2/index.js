const validate = window.document.getElementById('validate')
const information = window.document.getElementById('information')
const response = window.document.getElementById('response')

validate.onclick = () => {

    const date = new Date();
    var actualYear = date.getFullYear();

    const year = window.document.getElementById('year');
    const gender = window.document.getElementsByName('gender');

    if(year.value < 1910 || year.value > actualYear ) return alert(`[ERROR] ano inválido! digite um ano de 1910 até ${actualYear}`);
    if(!gender[0].checked && !gender[1].checked) return alert('[ERROR] selecione o sexo.');

    var age = actualYear - year.value;
    var actualGender;
    var image = document.getElementById('img');
   

    if(gender[0].checked){
        actualGender = 'um Homem';
        if( age >= 0 && age < 10){
            image.setAttribute('src', 'img/male-child.png');
        }
        else if( age < 21 ){
            image.setAttribute('src', 'img/male-young.png');

        }
        else if( age < 50){
            image.setAttribute('src', 'img/male-adult.png');

        }
        else{
            image.setAttribute('src', 'img/male-old.png');

        }

    }
    if(gender[1].checked){
        actualGender = 'uma Mulher';

        if( age >= 0 && age < 10){
            image.setAttribute('src', 'img/woman-child.png');
        }
        else if( age < 21 ){
            image.setAttribute('src', 'img/woman-young.png');

        }
        else if( age < 50){
            image.setAttribute('src', 'img/woman-adult.png');

        }
        else{
            image.setAttribute('src', 'img/woman-old.png');

        }

    }
    response.innerHTML = `Detectamos ${actualGender} de ${age} anos de idade`;

}