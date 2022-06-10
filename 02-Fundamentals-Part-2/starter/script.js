'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
    console.log('I can drive from the passTest')
}

if (hasDriversLicense) {
    console.log(hasDriversLicense);
    console.log('I can drive');
}
//const interface = 'Audio';
*/

/*

function logger() {
    console.log('May name is Vinh');
}

//calling, running, or invoking
logger();


function fruitProcessor(apples, oranges) {
    const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(`AppleOrnage Juice recipe needs ${appleOrangeJuice}`);

const num = Number('23');
const type = typeof (num);

console.log(type);

console.log(num);
*/

/*
//function decalaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);



//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);


//output
console.log(age1, age2);

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return (`${firstName} retires in ${retirement} years`);
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//lesson 36



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = (`Juice with ${applePieces} apple pices and ${orangePieces} orange pieces.`);
    return juice;
}

const fruitRecipe = fruitProcessor(2, 3);
console.log(fruitRecipe);


const calcAge = function (birthYear) {
    return 2037 - birthYear;

}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return retirement;
    //return (`${firstName} retires in ${retirement} years`);
}
console.log(yearsUntilRetirement(1991, 'vinh'));
console.log(yearsUntilRetirement(1970, 'Mike'));



//arrow function calvAverage
const calcAverage = (score1, score2, score3) => {
    const avgScore = ((score1 + score2 + score3) / 3);
    return avgScore;

}

const dolAvgScore = calcAverage(44, 23, 71);
console.log(`Dolphin Avg score is ${dolAvgScore}`);

const kolAvgScore = calcAverage(65, 54, 49);
console.log(`Koalas Avg score is ${kolAvgScore}`);

//expression function
const checkWinner = function (dolAvgScore, kolAvgScore) {
    if (dolAvgScore >= kolAvgScore * 2) {
        console.log(`Dolphins Win! ${dolAvgScore} vs ${kolAvgScore}`);

    } else if (kolAvgScore >= dolAvgScore * 2) {
        console.log(`Kolas win! ${kolAvgScore} vs ${dolAvgScore}`);

    } else {
        console.log("No one wins!");
    }
}

checkWinner(dolAvgScore, kolAvgScore);


//litteral syntax
const friends = ['Christian', 'Kheng', 'Vinh',];
console.log(friends);

//Array function
//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

//length is property of friends array
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Dok', 2037 - 1991, 'teacher', friends];

console.log(jonas);

//Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);


//litteral syntax
const friends = ['Christian', 'Kheng', 'Vinh', 'Peter'];
console.log(friends);

//add to the last place of array
friends.push('Adam');
console.log(friends);


//add to beginning of array
friends.unshift('John');
console.log(friends);


//remove last element of array
friends.pop();
console.log(friends);


//remove the first element of array
friends.shift();
console.log(friends);

//returns element of data
console.log(friends.indexOf('Kheng'));

//includes - is the element in the array T/F
console.log(friends.includes("steven"));
console.log(friends.includes("Vinh"));

if (friends.includes('Peter')) {
    console.log('You have a friend named Peter');
} else {
    console.log('you dont have a friend named Peter');
}

//tips function
const tipAmount = function calcTip(bill) {
    if (bill > 50 && bill < 300) {
        //console.log(bill);
        console.log("15%");
        return (bill * .15);
    } else {
        // console.log(bill);
        console.log("20%");
        return (bill * .2);

    }
}
//const billAmount = 100;
const billsArray = [125, 555, 44];
const tipsArray = [tipAmount(billsArray[0]), tipAmount(billsArray[1]), tipAmount(billsArray[2])];

console.log(`the tip amounts is ${tipsArray[0]} for a bill of ${billsArray[0]} -  tip amount is ${tipsArray[1]} for a bill of ${billsArray[1]} -  tip amount is ${tipsArray[2]} for a bill of ${billsArray[2]}`);


console.log(`Total 1: ${billsArray[0] + tipsArray[0]}, Total 2: ${billsArray[1] + tipsArray[1]}, Total 3: ${billsArray[2] + tipsArray[2]}`);


console.log(billsArray, tipsArray);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Dok',
    age: 2037 - 1991,
    job: 'tecacher',
    friends: ['Mike', 'Peter', 'Steven']
};

//dot notation - need to use the real property name
console.log(jonas);

console.log(jonas.lastName);

//bracket notation we can build a string to search the object
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

/*
const interestedIn = prompt('What do you want to know about Jonas?  Choose between first name, last name, age, job, and friends');
console.log(interestedIn);

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('No value defined')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonassschedtman';
console.log(jonas);



//challenge
//Jonas has 3 friends, and his best friend s called Michael
const friendCount = jonas.friends;
const friendCount2 = (friendCount.length);
console.log(`${jonas['firstName']} has ${friendCount2}, and his best friend is called ${jonas.friends[0]}`);

*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Dok',
    birthYear: 1991,
    job: 'tecacher',
    friends: ['Mike', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     //console.log(this);
    //     return 2037 - birthYear;
    // }

    // calcAge: function (birthYear) {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //ternary operator
    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he as ${this.hasDriversLicense ? 'a' : 'no'} drivers license`);
    }

};
//console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//console.log(jonas['calcAge'](jonas.birthYear));

//Challlenge
//"Jonas is a 46-year old teacher, and he has a/no drivers license"

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;

// }

console.log(jonas.hasDriversLicense);

function canDrive() {
    if (jonas.hasDriversLicense) {
        return 'a';
    } else {
        return 'no';
    }
}

const driver = canDrive();
console.log(driver);


console.log(`${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas.job}, and he has ${driver} drivers license`);

//console.log(jonas.getSummary());

