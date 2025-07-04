// Advent of Code 2015
// Day 1 Part 1
// By Adisoreq

const input = `(())` // Insert actual input here

var x = 0;

for (let char of input) {
    if (char === '(')
        ++x;
    else if (char === ')')
        --x;
}

console.log(x)
