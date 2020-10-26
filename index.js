import { CoolPerson } from "./person";
import Teacher, { promote } from "./teacher";

function sayHello() {
    for (let i = 0; i<5; i++ ){
        console.log(i);
    }
}
//sayHello();
// var -> are scoped inside the function
// let -> are scoped inside the block
//const -> same as let but are constant

const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    },


};
const walk = person.walk.bind(person);
//walk();


const square = function(number) {
    return number * number;
}
//const square = number => number * number;
//same functions


const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]
const activeJobs = jobs.filter(function(job) {
    return job.isActive;
});

//const activeJobs = jobs.filter((job) => job.isActive);
//filter jobs where job is active

const boy = {
    talk() {

        setTimeout(() => {
            console.log('this', this);
        }, 1000);
        
    }
}
//boy.talk();



const colors = ['red','green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
// template literals
//console.log(items);


const adress = {
    street: 'haha',
    city: 'uuu',
    country: 'yee',
};

//const street = adress.street;
//const city = adress.city;
//const country = adress.country;

const {street: st, city} = adress;
//console.log(st);
// object destructuring


const first = [1,2,3];
const second = [4,5,6];

//const combined = first.concat(second);
const combined =[...first, 'a', ...second, 'b'];
//the spread operator, it gets you each individual item in that array
//another cool thing with it is that u can easily clone an array or an objects
//ex for arrays:
const clone = [...first];

//ex for objects
const third = {name: 'Mosh'};
const forth = {job: 'Instructor'};

const combined2 = {...third, ...forth, location: 'Australia'};
//console.log(combined2);



//CLASSES


const coolPerson1 = new CoolPerson();
//console.log(coolPerson1);
const coolPerson2 = new CoolPerson('DaniBossu');
//console.log(coolPerson2);



//Inheritance

const teacher = new Teacher('Mosh', 'Master');
console.log(teacher);
teacher.walk();
teacher.teach();



// MODULES
