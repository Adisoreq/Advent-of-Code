// Advent of Code 2015
// Day 5 Part 2
// By Adisoreq

// Input

const input = 
`qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`

// Code

const lines = input.trim().split('\n')

let n = 0

for (let line of lines) {
    const regex = [
        /([a-z]{2}).*\1/, // Two pairs of letters
        /([a-z]).\1/ // One letter that repeats with one letter in between
    ]

    if (line.match(regex[0]) && line.match(regex[1])) {
        console.log(`${line} - OK`)
        n++
    } else {
        console.log(`${line} - NOT OK`)
    }
}

console.log(`Total valid strings: ${n}`)