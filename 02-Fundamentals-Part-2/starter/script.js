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
*/

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