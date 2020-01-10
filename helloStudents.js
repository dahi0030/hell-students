'use strict';

const print = massage => console.log(massage);
const students = require('./students.json');
let lastNameWithD = 0;

print('\n');

students.forEach(student => {
    print(`Hello ${student.firstName} ${student.lastName}`);
    if (student.lastName.includes('D')) {
        lastNameWithD++;
    }
});

print('\n');

print(`Count of last names starting with D is: ${lastNameWithD}`);

print('\n');