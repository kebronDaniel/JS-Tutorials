console.log('Swapping two Vars')
let a = 2;
let b = 3;
console.log(a,b);
let c = a;
a = b;
b = c;
console.log(a,b);

function compare(firstNumber, secondNumber){
    return (firstNumber>secondNumber) ? firstNumber : secondNumber
}

let final = compare(3,5)
console.log(final)

function isLandScape(width, height){
    return (width > height) ? "LandScape" : "Portrait"
}
console.log(isLandScape(20,10))

function fizzBuzz(number){

    if (typeof number !== 'number'){
        return NaN;
    }

    if(number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }
    else if (number % 3 == 0) {
        return "Fizz";
    }
    else if (number % 5 == 0){
        return "Buzz";
    }
    else {
        return "Neither a Fizz nor a buzz";
    }
}

console.log(fizzBuzz(2));

function checkSpeed(speed){
    const speedLimit = 70
    const pointsPerKm = 5
    points = 0;
    if (speed > speedLimit) {
        overSpeed = speed - speedLimit;
        result = Math.floor(overSpeed / pointsPerKm);
        points = points + result;
        
        if (result < 1) {
            return "OK";
        }
        else if (result > 12) {
            return "Licence is Suspended"
        }
        else {
            return "points = " + points;
        }

    }
    else {
        return "OK";
    }
}

let userData =  checkSpeed(90);
console.log(userData);

function showNumbers(limit){
    for (let index = 0; index <= limit; index++) {
        let message = (index % 2 === 0) ? index + " Even" : index + " Odd";
        console.log(message);
    }
}

console.log(showNumbers(13));

function countTruthy(array){
    let counter = 0;
    for (let member of array) {
        if (member) {
            counter ++;
        }
    }
    return "Number of Truthy values are : " + counter;
}

dataCollection = ["Kebron", "", 0,12, NaN, "Sivan"];
let TruthyValues = countTruthy(dataCollection);
console.log(TruthyValues);


function showProperties(obj){
    for (let key in obj) {
        let member = obj[key];
        if (typeof(member) === 'string') {
            console.log(obj[key]);
        }
    }
}

let movie = {
    title : "Madagascar",
    year : 2004,
    genre : "Animation"
};

showProperties(movie);

function sum(limit){
    let sumOfMultiples = 0;
    for (let index = 0; index <= limit; index++) {
        if (index % 3 == 0 || index % 5 == 0){
            sumOfMultiples = sumOfMultiples + index;
        }
    }
    console.log(sumOfMultiples);
}

sum(9);

function calculateMarks(totalGrade){
    //  didn't contain a logic to check for the type of all members to avoid errors for values that are not numbers.
    let sum = 0;
    let totalSubjects = totalGrade.length;
    for (let key in totalGrade) {
        sum += totalGrade[key];
    }

    let avarage = sum / totalSubjects;
    let grade = "";
    if (avarage >= 1 && avarage <= 59) {
        grade = "F";
        console.log("Your Avarage is " + avarage + " and your grade is " + grade);
    }
    else if (avarage >= 60 && avarage <= 69) {
        grade = "D";
        console.log("Your Avarage is " + avarage + " and your grade is " + grade);
    }
    else if (avarage >= 70 && avarage <= 79) {
        grade = "C";
        console.log("Your Avarage is " + avarage + " and your grade is " + grade);
    }
    else if (avarage >= 80 && avarage <= 89) {
        grade = "B";
        console.log("Your Avarage is " + avarage + " and your grade is " + grade);
    }

    else {
        grade = "A";
        console.log("Your Avarage is " + avarage + " and your grade is " + grade);
    }
}

marks = [40,80,68,90,57,78]
calculateMarks(marks);

function showStars(numberOfStars){
    let pattern = "";
    for (let index = 1; index <= numberOfStars; index++) {
       pattern += "*";
       console.log(pattern);
    }
}
showStars(7);

function showPrimes(limit){
    for (let index = 1; index <= limit; index++) {
        if (index % 2 !==0 && index % 3 !==0 && index % 5 !==0) {
            console.log(index + " is a prime number");
        }
    }
}
showPrimes(58);

// another way of printing the prime numbers
function printPrimes(limit){
    for (let number = 0; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0 ) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}
printPrimes(50);

// objects

// using a factory function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("Draw");
        },
    };
}

const circle1 = createCircle(4);
console.log(circle1);

// using a constructor
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw");
    }
}
const circle2 = new Circle(5);

// since functions are objects
const circle3 = Circle.call({} , 14);   // This is like the above statment using new
                                        // but now the new is substituted with an empty object which represents the new object.
console.log(circle2);

// objects are Dynamic
let x = {
    name : "Dynamic"
};

x.age = 098765;
x.info = "Other attr";

delete(x.info);
console.log(x);

function CreatePerson(name, age, id){
    this.name = name;
    this.id = id;
    this.age = age;
    
    this.message = function(){
        console.log("Hello new person");
    };
    
}

let kebron = new CreatePerson("Kebron", 24, 1234);

// this one is the same as using the for in array.
for (const iterator of Object.keys(kebron)) {
    console.log(kebron[iterator]);
}

// this returns every key value pair as one array.
for (const entry of Object.entries(kebron)) {
    console.log(entry);
}

// to check a key is using the 'in' operator
let message = ('name' in kebron) ? "yes" : "no";
console.log(message);

// Clone an object using object.assign(can clone from many objects) and sprade operator
const Daniel = Object.assign({title : "Manager"}, kebron);
const Naomi = {... kebron};
console.log(Daniel, Naomi);



