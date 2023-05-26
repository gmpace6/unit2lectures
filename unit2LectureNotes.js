const myVar = 5
const myVarTwo = Boolean(5)
console.log(myVarTwo) // true

const someVar = ''
const someVarTwo = Boolean(someVar)
console.log(someVarTwo) // false

const bool = true
const boolTwo = Number(true)
const bool3 = (+false) // or +(false)
console.log(boolTwo) // 1
console.log(bool3) // 0

const string = '42ft'
const withNumber = Number(string)
const withParseInt = parseInt(string)
console.log(withNumber) // NaN
console.log(withParseInt) // 42

const evenNumber = 22
const stringNumber = String(evenNumber)
console.log(stringNumber) // '22'
console.log(String(5)) // '5'

const myBool = false
const phrase = 'That is ' + myBool
console.log(phrase) // 'That is false'

// const oddNumber = 3
const stringThree = 3 + ''
console.log(stringThree) // '3'

const myString = 'devmountain'
console.log(myString.includes('ou')) // true
console.log(myString.startsWith('v')) // false
console.log(myString.endsWith('n')) // true

let lowerString = 'lowercase letters'
lowerString.toUpperCase()
console.log(lowerString) // 'lowercase letters'

lowerString = lowerString.toUpperCase()
console.log(lowerString) // 'LOWERCASE LETTERS'

let upperString = lowerString.toUpperCase()
console.log(upperString) // 'LOWERCASE LETTERS'

let whitespace = '   code  '
const newWhitespace = whitespace.trim()
whitespace = whitespace.trim()
console.log(newWhitespace) // 'code'
console.log(whitespace.toUpperCase()) // 'code'

const crazyString = 'tHiS is A StrINg'
const upperCrazy = crazyString.toUpperCase()
const lowerCrazy = crazyString.toLowerCase()
console.log(upperCrazy) // 'THIS IS A STRING'
console.log(lowerCrazy) // 'this is a string'

const shortStory = 'Once upon a time, there was a dragon. He was awesome. The end.'
const noFirstE = shortStory.replace('e', 'x')
console.log(noFirstE) // Oncx upon a time, there was a dragon. He was awesome. The end.
const noLetterE = shortStory.replaceAll('e', 'x')
console.log(noLetterE) // Oncx upon a timx, thxrx was a dragon. Hx was awxsomx. Thx xnd.

console.log('That is ' + false) // 'That is false'

const statement = 'It is your birthday.'
const splitStr = statement.split(' ')
console.log(splitStr) // [ 'It', 'is', 'your', 'birthday.' ]
const splitOnLetter = statement.split('t')
console.log(splitOnLetter) // [ 'I', ' is your bir', 'hday.' ] (Case sensitive)
const splitDoNothing = statement.split()
console.log(splitDoNothing) // [ 'It is your birthday.' ] Takes whole string and adds it the the array as 1 element.
const splitDoEverythingWithEmptyString = statement.split('')
console.log(splitDoEverythingWithEmptyString) // [ 'I', 't', ' ', 'i', 's', ' ', 'y', 'o', 'u', 'r', ' ', 'b', 'i', 'r', 't', 'h', 'd', 'a', 'y', '.' ]

const arrayOfWords = ['North', 'South', 'East', 'West']
const joinWithCommas = arrayOfWords.join() // default joins with commas
console.log(joinWithCommas) // 'North,South,East,West'
const joinWithNoCommas = arrayOfWords.join('')
console.log(joinWithNoCommas) // 'NorthSouthEastWest'
const joinWithSpaces = arrayOfWords.join(' ')
console.log(joinWithSpaces) // 'North South East West'
const joinWithPlus = arrayOfWords.join(' + ')
console.log(joinWithPlus) // 'North + South + East + West'

function calculateScore(studentScore) {
    studentScore += 5
    studentScore *= 2
    return studentScore
}
let hermioneScore = calculateScore(44)
let harryScore = calculateScore(41)
console.log("hermioneScore =", hermioneScore, ",", "harryScore =", harryScore)

function logMyName(name3) {
    console.log(name3)
}
    logMyName('Cameron') // Output: Cameron

function sumNumbers(num1, num2) {
    console.log(num1 + num2)
}
sumNumbers(3, 9) // Output: 12
sumNumbers(12, 33) // Output: 45
sumNumbers(-15, '15') // Output: 0

function subtractNumbers(num1, num2) {
    console.log(num1 - num2)
}
subtractNumbers(3, 9) // Output: 12
subtractNumbers(12, 33) // Output: 45
subtractNumbers(-15, '15') // Output: 0

let purse = 20
function calculateTotal(item1, item2) {
  return item1 + item2
}
purse -= calculateTotal(6.59, 9.99)  // updates purse to equal 20 - 16.58 (nothing prints to console without console.log)

let age1 = 21
function logDetails() {
  let name4 = 'Tyler'
  console.log(`My name is ${name4} and I am ${age1}.`)
}


function greeting(myName) {
    return `Hello, ${ myName }!`;
}

var msg = greeting("Kyle");

console.log(msg);   // Hello, Kyle!


var whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Kyle.");
    }
};
whatToSay.greeting();
// Hello!

function shoeMaker (color, size) {
    console.log(color + ", size " + size + " shoe")
}
shoeMaker("red", 13)

function shoeMaker1 (color, size) {
    return color + ", size " + size + " shoe"
}
console.log(shoeMaker1("red", 13))

function giveMe7 () {
    var seven = 7
    return seven
}
var ten = giveMe7() + 3
console.log(ten)


// Object Orientation

const dog = {
    name: 'Freida',
    color: 'brown/black',
    hunger: 40,
    mood: 'feisty',
    age: 9,
  };

console.log(dog.name)    // prints Freida
console.log(dog['name']) // also prints Freida

let freidaAge1 = dog.age // Sometimes it’s useful to save a value to a variable so that you can use it outside of the object easily
let {age2} = dog

console.log(age2) // We can also access values using a syntax called destructuring

// On the left side of the equals sign, you destructure the properties from the object, which goes on the right

let {name, color, age} = dog

console.log(`${name} is a ${color} dog who is ${age} years old.`)


  const dog2 = {
    name: 'Buddy',
    color: 'gray',
    age: 1
  }
  
  
  const {age: freidaAge} = dog
  const {age: buddyAge} = dog2
  
  console.log(freidaAge) // 9
  console.log(buddyAge) // 1
  console.log(age) // undefined

dog.nickname = 'Puppers';     // dot notation
// dog['nickname'] = 'Puppers'; // square brackets
console.log(dog)

delete dog.hunger
console.log(dog)

let dog3 = {
    'name': 'Libby',
    'age': 3,
    'nickname': 'Libbers'
  };
  console.log(dog3)

  function bark(dog){
    console.log('Arf! I am', dog.name, 'the dog!');
  }
  bark(dog3)

  class Dog {
    constructor(name, color){
      this.name = name;
      this.color = color;
    }

    bark(){
      console.log('Arf! I am', this.name, 'the dog!');
    }
}

let dog1 = new Dog('Freida', 'brown');
let dog5 = new Dog('Sally', 'pink');

console.log(dog1.name)  // Freida
console.log(dog5.name)  // Sally

dog1.bark()    // Arf, I'm Freida the dog!
dog5.bark()    // Arf, I'm Sally the dog!