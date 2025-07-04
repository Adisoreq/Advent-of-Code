// Advent of Code 2015 
// Day 10 Part 2
// By Adisoreq


// Input

const input = '1113122113';
const steps = 50;


// Code

const transform = (string) => {
    let str = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            str += ',';
        }
        str += string[i];
    }
    return str.split(',').map(group => `${group.length}${group[0]}`).join('');
}


// Init

let str = input

console.log(`[0] ${str}`)

for (let i = 0; i < steps; i++) {
    str = transform(str);
    
    if (i < 6) {
        console.log(`[${i + 1}] ${str}`);
    } else if (i == 6) {
        console.log('...')
    }
}


// Results

console.log('\n-----------------\nResult:\n' + str.length)
