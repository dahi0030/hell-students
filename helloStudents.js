'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const print = massage => console.log(massage);
const students = require('./students.json');
let lastNameWithD = 0;

print('\n');

students.forEach(student => {
    print(`Hello ${student.firstName} ${student.lastName}`)
    if (student.lastName.includes('D')) {
        lastNameWithD++
    }



})

print('\n');

print(`Count of last names starting with D is: ${lastNameWithD}`)

print('\n');







// for (i in students) {
//     let firstName = students[i].firstName;
//     print(students[i].firstName + ' ' + students[i].lastName)
// }