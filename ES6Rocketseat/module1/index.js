// all exercises were taken from this PDF: https://skylab.rocketseat.com.br/api/files/1566499229316.pdf
// exercises solved by: Rafael Iwao
// github: https://github.com/Fael-Iwao

//-------------------// EXERCICE 1 //-------------------//

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User{
    constructor(){
        super();
        super.admin = true;
    }    
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin())
// console.log(Adm1.isAdmin())


//-------------------// EXERCICE 2 //-------------------//

const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

// 2.1
const ages = users.map(item => item.age);
// console.log(ages)


// 2.2
const rocketseat = users.filter(item => item.company === 'Rocketseat' && item.age >= 18)
// console.log(rocketseat)


// 2.3
const isGoogle = users.find(item => item.company === 'Google')
// console.log(isGoogle)


// 2.4
const multiply = users.map(item => ( { ...item, age: item.age * 2} ) ).filter(item => item.age < 50)
// console.log(multiply)


//-------------------// EXERCICE 3 //-------------------//

// 3.1
const arr = [1, 2, 3, 4, 5];


arr.map(item => item + 10);




// 3.2
const userEx3 = { name: 'Diego', age: 23 };

const showAge = (user) =>  user.idade;

showAge(userEx3);


// 3.3
const nameEx3 = "Diego";
const ageEx3 = 23;
const showUser = (name = 'Diego', age = 18) =>({ name, age });

showUser(nameEx3, ageEx3);
showUser(nameEx3);



// 3.4
const promise = () => new Promise((resolve, reject) => resolve());




//-------------------// EXERCICE 4 //-------------------//


const company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};

// 4.1

const { name, address: { city, state } } = company;

// console.log(name); // Rocketseat
// console.log(city); // Rio do Sul
// console.log(state); // SC

// 4.2

const showInfo = ({ name, age }) => `${name} tem ${age} anos.`;

showInfo({ name: 'Diego', age: 23 })
   

//-------------------// EXERCICE 5 //-------------------//


// 5.1

const arrEx5 = [1, 2, 3, 4, 5, 6];
const [ x, ...y] = arrEx5;

// console.log(x)
// console.log(y)


// 5.2

const sumEx5 = (...params) => params.reduce((total, next) => total + next);

// console.log(sumEx5(1, 2, 3, 4, 5, 6)); // 21
// console.log(sumEx5(1, 2)); // 3

const userEx5 = {
    name: 'Diego',
    age: 23,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
        country: 'Brasil',
    }
};

const user2 = { ...userEx5, name: 'Gabriel'}
const user3 = { ...userEx5, address: {...userEx5.address, city: 'Lontras'} }

// console.log(user2, user3)


//-------------------// EXERCICE 6 //-------------------//

const userEx6 = 'Diego';
const ageEx6 = 23;

// console.log(`O Usuario ${userEx6} possui ${ageEx6} anos.`);


//-------------------// EXERCICE 6 //-------------------//

const nome = 'Diego';
const idade = 23;

const userEx7 = {
    nome,
    idade,
    cidade: 'Rio do Sul',
   };

//    console.log(userEx7)