class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.user = "Rafael";
        
    }

    showUser(){
        console.log(this.user);       
    }

    
}


class Math{
    static sum(a, b){
        return a + b;
    }
    static multiplication(a, b){
        return a * b;
    }
}

const myTodoList = new TodoList();



// console.log(myTodoList.add('my Todo'));

const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item){
    return item * 2;
});

const sum = arr.reduce(function(total, next){
    return total + next;
});

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

const find = arr.find(function(item){
    return item === 4;
});


//total = 0 next = 1//
// console.log(newArr);
// console.log(sum);
// console.log(filter);
// console.log(find);



// ===== arrow functions ===== //


const newArr2 = arr.map(item => item * 2);

const sum2 = arr.reduce((total, next) => total + next);

const filter2 = arr.filter((item) => {
    return item % 2 === 0;
});

const retunrObj = () => ({name: 'Fael'});

// console.log(newArr2);
// console.log(sum2);
// console.log(filter2);


// ===== Default Values ===== //

const mySum = (a = 1, b = 2) => a + b;

// console.log(mySum())
// console.log(mySum(4))



// ===== unstructuring ===== //

const user = {
    name: 'Rafael',
    age: 26,
    address: {
        city: 'Caieiras',
        state: 'SP'
    }
}





// const { name, age, address: {city} } = user;
// console.log(age);
// console.log(name);
// console.log(city);

const myArr = [1, 2, 3, 4];

const [ a, b, c] = myArr;

const showUser = ({name, age, address: {city} }) =>  `${name} ${age} ${city}`;



// console.log(showUser(user))




// ===== REST SPREAD =====//

// rest

const { name, age, ...rest } = user;


function myNewSum (a,b, ...params){
    return params;
}

// console.log(myNewSum(1,2,3,4,4,4,4,4,5,6,7,))

// console.log(name, age, rest)


// spread

const myArr2 = [5, 6, 7]

const myArr3 = [...myArr, ...myArr2]

const user3 = { ...user, name: 'Fernanda'}

// console.log(myArr3)
// console.log(user3)


// ===== Object Short Syntax ===== //


const color = 'red';
const width = 100;

const square = {
    color,
    width,
    height: 100
}

// console.log(square)