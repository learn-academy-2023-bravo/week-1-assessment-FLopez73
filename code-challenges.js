// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//input: 1 number 
//output: 1 string
//create a function named boilingPoint that has a parameter of the temp for the number input
//the function takes the parameter number and compares against the boiling point which is 212 
//it returns a string with a inperpolation syntax to include input letting user know if above, below or at boiling.
//  

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

let temp = 42

const boilingPoint = (temp) => {
if (temp > 212){
    return (`${temp} above boiling point`)
} else if (temp < 212){
    return (`${temp} below boiling point`)
} else if (temp === 212){
    return (`${temp} at boiling point`)
} else {return ("who knows?")}
}


console.log(boilingPoint (42))  //42 above boiling point
console.log(boilingPoint (350)) // 350 above boiling point
console.log(boilingPoint (212)) //212 at boiling point
 

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//input:2 arrays
//output: number
// using method console.log to concat the 2 arrays and run a sencondary .length property to measure the combined arrays.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

//console.log((padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length) 
//output: 9
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//input:1 string
//output: string reversed
// create a const ourCohort to turn the string into an array using .split method
//using method console.log to reverse the array secondarrly running .join function to turn array back into string
//return string in reverse order

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"
 
//const ourCohort = (currentCohort.split(''))

//console.log((ourCohort.reverse()).join(''))
//output:3202 ovarB


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

//console.log(myNumbers.lastIndexOf(givenValue1))
//output: 7

//console.log(myNumbers.lastIndexOf(givenValue2))
//output: 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const tempOne = (sanDiegoSummerTemperatures.sort().reverse())

const tempTwo = (sanDiegoWinterTemperatures.sort().reverse())

//console.log(tempOne)
//output: [82, 80, 79, 77, 76, 73, 72]

//console.log(tempTwo)
//Expected output: [68, 67, 66, 66, 62, 59, 59]
