// Advent of Code 2015
// Day 4 Part 2
// By Adisoreq

// Input

const secretKey = 'bgvyzdsv';
const requiredString = '000000'; // six zeroes

// Code

const crypto = require('crypto');

function findAdventCoinNumber(secretKey) {
    let number = 1;

    while (true) {
        const input = secretKey + number;
        const hash = crypto.createHash('md5').update(input).digest('hex');

        if (hash.startsWith(requiredString)) {
            return number;
        }

        number++;
    }
}

// Init

const result = findAdventCoinNumber(secretKey);

// Results

console.log("The lowest number is:", result);
