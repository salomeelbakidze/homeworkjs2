'use strict';


// ..task1

let numberArray = [ 3,5,6,7,17,23,27,30,42,53,46,60,87,92,100];
for (let item of numberArray) {
    if (item > 5 ) {
        console.log(item);

    }
    if (item < 100) {
        console.log(item);
    }
}


// ..task2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item of array1) {
    if (item > 0 ) {
        console.log(item);

    }
    if (item < 10) {
        console.log(item);
    }
}



// ..task3

let array2= [1, 2, 3, 4, 5];

sum = 1;

for (let i = 0; i < array2.length; i++) {
    console.log(sum == array2[i]);
}



// ..task4

let array3= [1, 2, 3, 4, 5];

let sum = 0;

for ( let i = 0; i < array3.length; i++) {
    sum += array3 [i];
}



// ..task5

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };

  console.log(user.studentstatus);

  

// ..task6

let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus == 'active') {
    console.log('hello user');
}
if (user2.name == 'levani') {
    console.log('hello levani');
}
if (user2.studentstatus == 'active' || user2.age < 25) {
    console.log('hello anna');
}
else {
    console.log("error");
}

// ternary operator ?
let resultStatement = user2.age < 18 && user2.studentstatus == 'active' ?
'hello user': user2.name == 'levani' ? 'hello levani' : user2.studentstatus == 'active' || user2.age < 25 ? 'hello anna' : "error" ;
console.log(resultStatement);






// ..task7

let array6 = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ];

let even = [];
let i = 0;
while (i < array6.length) {
    if (array6[i] % 2 == 0)
        even.push (array6[i]);
    i++;
}

console.log( ' even numbers in an array are: ${even}');





// ..task8

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]




// ..task9

let array7 = [32, 14, null, '40', 50];






// ..task10

let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

console.log(array8 [0,2,3] [0] [0]);



