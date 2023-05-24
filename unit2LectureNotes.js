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

function logMyName(name) {
    console.log(name)
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

let age = 21
function logDetails() {
  let name = 'Tyler'
  console.log(`My name is ${name} and I am ${age}.`)
}
