// Advent of Code 2015
// Day 12 Part 2
// By Adisoreq


// Input

const input = `
{"a":1,"b":2,"c":3}
`                                       // = 6
//const input = `[1,2,3]`               // = 6
//const input = [[[3]]]                 // = 3
//const input = `{"a":{"b":4},"c":-1}`  // = 3
//const input = `{"a":[-1,1]}`          // = 0
//const input = `[-1,{"a":1}]`          // = 0
//const input = `[]`                    // = 0
//const input = `{}`                    // = 0

// Code

function sumNumbersInObject(obj) {
    let sum = 0

    if (typeof obj === 'number') {
        return obj;
    } else if (Array.isArray(obj)) {
        for (let element of obj) {
            sum += sumNumbersInObject(element);
        }
    } else if (typeof obj === 'object' && obj !== null) {
        if (Object.values(obj).includes('red')) {
            return 0;
        }
        for (let value of Object.values(obj)) {
            sum += sumNumbersInObject(value);
        }
    }
    return sum;
}


// Init

const obj = JSON.parse(input)


// Results:

console.log("Object:")
console.log(obj)

console.log(`\nSum: ${sumNumbersInObject(obj)}`)
