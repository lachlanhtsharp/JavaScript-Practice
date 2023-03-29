function add(a, b) {
    return a + b;
}
console.log(Date());

const addFunction = (param1, param2) => param1 + param2;

const addName = (firstName, lastName) => firstName + ' ' + lastName;

// let movieRating = age > 12 ? "PG-13" : "PG";

let yourGrade;

const updateGrade = highSchoolGrade => {
    switch(highSchoolGrade){
        case 9: 
            yourGrade = "Freshman";
            break;
        case 10: 
            yourGrade = "Sophomore"
            break;
        case 11: 
            yourGrade = "Junior"
            break;
        case 12: 
            yourGrade = "Senior"
            break;
        default:
            yourGrade = "Invalid";
    }
}

const name = () => {
    let firstName;
    firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John!" : document.getElementById("demo").innerHTML = "Hello Human!";
}

class aClass {


    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        alert(this.name);
    }

    sayAge(){
        alert(this.age);
    }
}

const myInstance = new aClass("Lachlan", 24);
console.log(myInstance.sayName());