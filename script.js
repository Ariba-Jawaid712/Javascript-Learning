//let age = 20;

//console.log(age);

let city = 'karachi';

city = 'lahore';

console.log(city);

const countryName = 'Pakistan';

console.log(countryName);

//let marks = 90;

//const studentName = 'Ariba';

//console.log(marks);
//console.log(studentName);

//Functions

function greet(){
 console.log("Hello world");}

function showAge(age){
    console.log(age);
}

function add(a , b){
    return a + b;
}
 greet ();
 showAge(20);

 let result = add(10 , 5);
 console.log(result);

 function multiply(a, b){
    return a * b};

 let answer = multiply(10 , 2);
 console.log(answer);
 
//Array

//let students = ["Ariba", "Zainab", "Maida"];

//console.log(students);

let fruits = ["Apple" , "Banana", "Grapes", "Mango"];

console.log(fruits[3]);
console.log(fruits.length);


let cities = ["karachi" , "sukkur", "hyderabad"];
cities.push("Islamabad");
cities.pop();
console.log(cities);

let subjects = ["English", "Math", "Chemistry", "Biology"];
for(i = 0; i < subjects.length; i++){
    console.log(subjects[i]);
    }

//Conditional statement
//prompt('Enter your age')
let age = 18;
if(age > 18){
    console.log("you can vote");
    
} else {
    console.log("you can't vote");
    
}

 let Eligibility = prompt("Enter your age for CNIC")
let status = Eligibility >= 18 ? "Eligible" : "Not Eligible";
console.log(status);

//loops
for(let i = 1; i <= 10; i++){
console.log(i);
}
//table print 

let num = 7;
for(let i = 1; i <= 10; i++){
 console.log(num * i);
}
//odd numbers print
for(let i = 1; i <=20; i+=2){
console.log(i);
}
 
let marks = [90, 40 , 75, 32];
for(let i=0; i < marks.length; i++){
 if(marks [i]<= 50){
    console.log("Pass");
 } else{
    console.log("Fail");
 }
}
//objects
let student = {
    name: "Ariba",
    age : 22,
    city : "karachi"
};
console.log(student.name);

let students = [
    {
        name: "Ariba",
        age : 22
    },
        {
        name: "Waseem",
        age: 35
        }
];
console.log(students);
