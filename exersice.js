function CreateAddress(street , city , zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function makeAddress(street , city , zipCode){
    return{
        street,
        city,
        zipCode
    };
}

function showAddress(address){
    for (const key in address) {
       console.log(address[key]);
    }
}


const address1 = new CreateAddress("Saris" , "Addis Ababa", 123);
const address2 = makeAddress("Saris", "Addis Ababa" , 123);
const address3 = address1;

showAddress(address1);
showAddress(address2);

function areEqual(firstAddress, secondAddress){
    if (firstAddress.city === secondAddress.city && 
        firstAddress.street === secondAddress.street && 
        firstAddress.zipCode === secondAddress.zipCode) {
        console.log("They are the same")
    }
    else{
        console.log("They are not the same");
    } 
}

areEqual(address1, address2);

function areSame(firstAddress, secondAddress){
    const equal = (firstAddress === secondAddress) ? "they are equal" : "They are not equal";
    console.log(equal);
}
areSame(address1, address2);

// blog post object

const blogPost = {
    title : "New post",
    body : "This is the body of the new post",
    author : "Kebron",
    views : 5,
    comments : [
        {author : "Sivan",
        body : "This looks like a good post"},
        {author : "Daniel", body : "This looks great"}
    ],
    isLive : true
};

console.log(blogPost);

function CreateBlog(title, body, author){
    if ((typeof(title) === 'string') && (typeof(body) === 'string') && typeof(author) === 'string') {
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = 0;
        this.isLive = false;
        this.comments = [];
    }
    else{
        console.log("You have a type error in one of your inputs");
    }
}

const kblog = new CreateBlog("New post", "This is a new post", "Kebron");
console.log(kblog);

// This was ment to looks and copy the features of yelp.
// The properties are used to filter by thier price range.
let priceRange = [
    {minPrince : 2 , maxPrice : 10},
    {minPrince : 11 , maxPrice : 20},
    {minPrince : 21 , maxPrice : 30},
];

// using Find in arrays containing reference types (like objects) and also primitive types.
const people = [
    {id : 1 , name : "kb"},
    {id : 2 , name :"Dan"},
];

const person = people.find(
    function(man) {
        return man.name == "kb";
    }
);
console.log(person);

const numbers = [1,2,3,4,5];
const found = numbers.find(
    num => num > 3 // using a arrow funciton
    // () => {with no return statement and no need of curly braces for single line.} 
);
console.log("Found " + found);

// testing using every and some.
const hasPostive = numbers.every(
    num => num > 0
);
console.log("Does numbers in the array are positive ? " + hasPostive);

const moreThanTwo = numbers.some(
    num => num > 2
);
console.log("Does numbers array have numbers greater than 2 ? " + moreThanTwo);

// using filter to collect them in an array.
const allMoreThanTwo = numbers.filter(
    num => num > 2
);
console.log("All more than two are : " + allMoreThanTwo);

// Map to a string
const listItems = allMoreThanTwo.map(
    num => "the item number is " + num
);
console.log(listItems);

// Map to an object
const items = allMoreThanTwo.map(
    num => ({value : num})
    // the code below is the long way to write the same thing.
    // num => {
    //     const obj = {value : num};
    //     return obj;
    // }
);
console.log(items);

// chaining Functions
const testChainig = numbers.filter(
    num => num > 0
).map(
    num => ({value : num})
).filter(
    obj => obj.value > 2
).map(
    obj => obj.value
);
console.log(testChainig);

// using reduce : To reduce the allMorethanTwo array to a single number which is the sum.
const sum = allMoreThanTwo.reduce(
    (accumulator,currentValue) =>
        accumulator + currentValue
, 0);
console.log("The sum of the allMoreThanTwo array using reduce is : " + sum);









// sorting reference types, but this only works efficently for comparing two objects, unless we need to look into another sorting algorithms.
const carOne = [
    {id : 12 , name : "Toyota"},
    {id : 13 , name : "Mitsubishi"},
];

carOne.sort(function (a,b) {
    if (a.name > b.name) {
        return 1; 
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});











