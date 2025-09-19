'use strict';
let age = 25;
console.log(age);

age = 26;
console.log(age);

let namee = "John";
console.log(namee);

namee = "Doe";
console.log(namee);

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
person.age = 51; 
console.log(person.age)


let globalVar = "I'm visible everywhere";

function scopeExample() {
    let functionVar = "I'm only visible in this function";
    if (true) {
        let blockVar = "I'm only visible in this block";
        console.log(globalVar, functionVar, blockVar); // This works fine
    }
    console.log(globalVar, functionVar); // This works fine
    // console.log(blockVar); // This would cause an error
}

scopeExample();
console.log(globalVar); // This works fine
// console.log(functionVar); // This would cause an error

const maxUser = 100;
const DEFAULT_LANGUAGE = 'English';
const COMPANY_NAME = 'Acme Corporation';
function createUsername(userName) {
    if (getCurrentUserCount() < maxUser) {
        console.log(`Username ${userName} created successfully!`);        
    }
    else {
        console.log("user limit reached");
    }

    function getCurrentUserCount() {
        // Dummy implementation for demonstration
        return 50;
    }
}
createUsername("JohnDoe");
console.log(createUsername)