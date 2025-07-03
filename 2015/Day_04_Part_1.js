// Input

const secretKey = 'bgvyzdsv';

// Code

const crypto = require('crypto');

function findAdventCoinNumber(secretKey) {
    let number = 1;

    while (true) {
        const input = secretKey + number;
        const hash = crypto.createHash('md5').update(input).digest('hex');

        if (hash.startsWith('00000')) {
            return number;
        }

        number++;
    }
}

// Init

const result = findAdventCoinNumber(secretKey);

// Results

console.log("The lowest number is:", result);
