// all exercises were taken from this PDF: https://skylab.rocketseat.com.br/api/files/1566498717618.pdf
// exercises solved by: Rafael Iwao
// github: https://github.com/Fael-Iwao

//-------------------// EXERCICE 1 //-------------------//

var address = {
    street: "Rua dos pinheiros",
    number: 1293,
    district: "Centro",
    city: "São Paulo",
    state: "SP"
};

   
function returnAddress(obj){
    return `O usuário mora em ${obj.city} / ${obj.state}, no bairro ${obj.district}, no endereço "${obj.street}" com
    nº ${obj.number}`;
}





//-------------------// EXERCICE 2 //-------------------//


function evenNumbers(firstNumber, lastNumber){
    while(firstNumber <= lastNumber){
        if(firstNumber % 2 == 0){
            console.log(firstNumber)
        }
        firstNumber ++;
    }
}




//-------------------// EXERCICE 3 //-------------------//


function haveSkill(skills) {
   return (skills.indexOf('Javascript') != -1) ? true : false;
}

var skills = ["Javascript", "ReactJS", "React Native"];






//-------------------// EXERCICE 4 //-------------------//

function experience(year) {
    if(year < 1){
        return 'Iniciante';
    }
    else if(year > 1 && year < 3){
        return 'Intermediário';
    }
    else if(year > 3  && year < 7){
        return 'Avançado';
    }else{
        return 'Jedi Master';
    }
}
var yearsStudy = 7;




//-------------------// EXERCICE 4 //-------------------//



var users = [
    {
        name: "Diego",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function returnUser(users){
    for(user of users){
        console.log(`O ${user.name} possui as Habilidades: ${user.skills.join(', ')}.`)
    }
}
   
   




// console.log(returnAddress(address))
// console.log(evenNumbers(32, 321))
// console.log(haveSkill(skills))
// console.log(experience(yearsStudy));
// returnUser(users);   
