/*let js = "script.js";

console.log(js);

console.log(40 + 8 + 23 - 10);

console.log(true);

let year = 2022;
console.log(year);

let age = 30;
age = 31;



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2**3 means 2 to the power of 3


const firstName = 'Jonas';
const lastName = 'Dok';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x +10 i.e. 25
console.log(x);

x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
let z, y;

z = y = 25 - 10 - 5;

console.log(z);

console.log('z = ', z);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah);
console.log(averageAge);
*/



/*const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2; //markHeight ** 2 = markHieght * markHeight
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = Boolean(markBMI > johnBMI);

console.log('Mark BMI ', markBMI, 'John BMI ', johnBMI)
console.log(markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;  //`` is a backtick

console.log(jonasNew);

console.log(`strong
multiple
lines`);
*/

/*
const age = 19
age >= 18;


if (age >= 18) {
    console.log(`Sarah can drive 🔥`); //emoji on mac cmd+ctrl+space
} else {
    console.log(`Sarah is not old enough  ${age}`);
}

const birthYear = 2091;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


//const markMass = 95;
//const markHeight = 1.88;
//const johnMass = 85;
//const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2; //markHeight ** 2 = markHieght * markHeight
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = Boolean(markBMI > johnBMI);


if (markBMI > johnBMI) {
    console.log(`Mark has a higher BMI ${markBMI} compared to John ${johnBMI}`);
} else {
    console.log(`John has a higher BMI ${johnBMI}, compared to Mark ${markBMI}`);
}


const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(String(23), 23);

let n = '1' + 1;
n = n - 1;
console.log(n);


const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job!`);
}


let height;
if (height) {
    console.log(`yay, height defined`);
} else {
    console.log(`booo, height is undefined`);
}


const age = 18;
if (age === 18) console.log(`you just became an adult`);


const favorite = prompt("what's your favorite number?")

console.log(favorite);
console.log(typeof favorite);


if (favorite === 23) {
    console.log('cool, 23 is a great number');
} else if (favorite == 7) {
    console.log('7 is also a cool nuber')
    console.log(typeof favorite);
}


const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false; //C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sara can drive");
} else {
    console.log("Someone else should drive");
}
*/
/*
let dolphinScore1 = 97;
let dolphinScore2 = 112;
let dolphinScore3 = 86;
let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 86;

const dolphinScore1bonus1 = 97;
const dolphinScore2bonus1 = 108;
const dolphinScore3bonus1 = 89;
const koalasScore1bonus1 = 88;
const koalasScore2bonus1 = 91;
const koalasScore3bonus1 = 110;

const dolphinScore1bonus2 = 97;
const dolphinScore2bonus2 = 112;
const dolphinScore3bonus2 = 101;
const koalasScore1bonus2 = 109;
const koalasScore2bonus2 = 95;
const koalasScore3bonus2 = 106;


const avgDolphinScore = ((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3);
console.log(`Average Dolphine Score ${avgDolphinScore}`);

const avgKoalasScore = ((koalasScore1 + koalasScore2 + koalasScore3) / 3);
console.log(`Average Koalas Score ${avgKoalasScore}`);

if (avgDolphinScore > avgKoalasScore) {
    console.log(`Dolphins win with an Average Dolphine Score ${avgDolphinScore} vs ${avgKoalasScore}`);
} else if (avgDolphinScore < avgKoalasScore) {
    console.log(`Koalos win with an Average Koalas Score ${avgKoalasScore} vs ${avgDolphinScore}`);
} else if (avgDolphinScore == avgKoalasScore) {
    console.log(`Its a tie`);
}




console.log("______Bonus 1_______");

//game 1
if (dolphinScore1 >= 100 && dolphinScore1 > koalasScore1) {
    console.log("Dophins win game 1");
} if (dolphinScore1 === koalasScore1 && dolphinScore1 >= 100 || koalasScore1 >= 100) {
    console.log("Game 1 is tie");
} if (dolphinScore1 < koalasScore1 || koalasScore1 >= 100) {
    console.log("Kolas Win game 1");
} else {
    console.log(`Minimum not met for Game 1 Dolphin score was ${dolphinScore1}, Koala socre was ${koalasScore1}`);
}

//game 2
if (dolphinScore2 >= 100 && dolphinScore2 > koalasScore1) {
    console.log("Dophins win game 2");
} if (dolphinScore2 === koalasScore1 && dolphinScore2 >= 100 || koalasScore2 >= 100) {
    console.log("Game 2 is tie");
} if (dolphinScore2 < koalasScore2 || koalasScore2 >= 100) {
    console.log("Kolas Win game 2");
} if (dolphinScore2 < 100 && koalasScore2 < 100) {
    console.log(`Minimum not met for Game 2 Dolphin score was ${dolphinScore2}, Koala socre was ${koalasScore2}`);
}

//game 3
if (dolphinScore3 >= 100 && dolphinScore3 > koalasScore3) {
    console.log("Dophins win game 3");
} if (dolphinScore3 === koalasScore3 && dolphinScore3 >= 100 && koalasScore3 >= 100) {
    console.log("Game 3 is tie");
} if (dolphinScore3 < koalasScore3 && koalasScore3 >= 100) {
    console.log("Kolas Win game 3");
} else {
    console.log(`Minimum not met for Game 3 Dolphin score was ${dolphinScore3}, Koala socre was ${koalasScore3}`);
}



const dolphinScore1b = 96;
const dolphinScore2b = 108;
const dolphinScore3b = 89
const koalasScore1b = 88;
const koalasScore2b = 91;
const koalasScore3b = 110;

let minMetDolphinScore1b = dolphinScore1b;
let minMetDolphinScore2b = dolphinScore2b;
let minMetDolphinScore3b = dolphinScore3b;

let minMetKoalasScore1b = koalasScore1b;
let minMetKoalasScore2b = koalasScore2b;
let minMetKoalasScore3b = koalasScore3b;




const avgMinMetDolphinScore = ((minMetDolphinScore1b + minMetDolphinScore2b + minMetDolphinScore3b) / 3);
//console.log(minMetDolphinScore1b);
//console.log(minMetDolphinScore2b);
//console.log(minMetDolphinScore3b);
//console.log(`Average Dolphine Score ${avgMinMetDolphinScore}`);

const avgMinMetKoalasScore = ((minMetKoalasScore1b + minMetKoalasScore2b + minMetKoalasScore3b) / 3);
console.log(`Average Koalas Score ${avgMinMetKoalasScore}`);



if (avgMinMetDolphinScore > avgMinMetKoalasScore) {
    console.log(`Dolphin Win when min is met`);
} else {
    console.log(`Koalas Win when min is met`);
} if (minMetDolphinScore1b >= 100 || minMetKoalasScore1b >= 100) {
    console.log(`Both teams did not meet minimum score was not met for Game 1`);
}




const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log("Prepage theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');

}



if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');

} else if (day === 'tuesday') {
    console.log("Prepage theory videos");

} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");

} else if (day === 'friday') {
    console.log("record videos");

} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');

} else {
    console.log('Not a valid day');
}
*/
/*
const age = 8;
//age >= 18 ? console.log('I like to drink wine') :
//    console.log("I like to drink water");

const drink = age >= 18 ? 'drink wine' : 'drink water';
console.log(drink);

let drink2;
if (age >= 23) {
    drink2 = "wine";
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like drink ${age >= 18 ? 'wine' : 'water'}`);
*/

const amount = 430
    ;
const tip = amount >= 50 && amount <= 300 ? ".15" : ".20";
console.log(`Bill is ${amount}, tip is ${tip} of ${amount} i.e. ${tip * amount}, total bill is ${amount + (tip * amount)}`);

