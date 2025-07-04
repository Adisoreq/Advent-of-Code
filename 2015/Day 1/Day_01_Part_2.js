// Advent of Code 2015
// Day 1 Part 2
// By Adisoreq

const input = `()())` // Insert actual input here

var floor = 0;
var steps = 0;

for (let i = 0; i < input.length; ++i) {
    
    if (floor === -1) {
        break;
    }
    
    if (input[i] === '(')
        ++floor;
    else if (input[i] === ')')
        --floor;
        
    ++steps;
    console.log(`${steps}. ${floor}`)
}

console.log(`Steps: ${steps}`)
