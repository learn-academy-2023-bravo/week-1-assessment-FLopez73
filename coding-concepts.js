// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]

//console.log(colors.push("indigo")) //output:5 


// a) Your answer: It will log the array with 'indigo' added to the end.
// b) Verify and explain: it returned a value of 5 due to arrays having properties of length so it counts the "words" and returns that number. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)
//output:10
// a) Your answer:10
// b) Verify and explain:The .length string property returns a number value and spaces count as a value.

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])
//output:o

// a) Your answer:o
// b) Verify and explain: Rectangular brackets retun the value at a specific index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])
//output: Ruby

// a) Your answer:Ruby
// b) Verify and explain:In this case we are using rectangular brackets which return a value of a specific index. It is checking for the value at index 1 and returning it.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY SUNDAY
// b) Verify and explain:Error .toUpperCase() is a string property that is not applicable to the array since they return values. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)
//output:number

// a) Your answer:4
// b) Verify and explain:number due to the "typeof" operator which checks the type of operand's value which is an array that only returns numbers. 
