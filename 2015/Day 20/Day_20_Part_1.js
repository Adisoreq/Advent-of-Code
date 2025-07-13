// Advent of Code 2015
// Day 20 Part 1
// By Adisoreq


// Input

const input = `33100000`

const maxHouse = 1000000


// Code

const targetValue = Number(input)
const presents = new Array(maxHouse).fill(0);
let result = 0

for (let elf = 1; elf < maxHouse; elf++) {
    for (let house = elf; house < maxHouse; house += elf) {
        presents[house] += 10 * elf
    }
}

for (let house = 1; house < maxHouse; house++) {
    if (presents[house] >= targetValue) {  
        result = house
        break
    }
}


// Results

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${presents[i]}`)
}
console.log('...')
console.log(`${result}: ${presents[result]} <- THIS`)