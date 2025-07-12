// Advent of Code 2015
// Day 11 Part 1
// By Adisoreq


// Input

const input = 'vzbxkghb'


// Code

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function threeContinousLetters(string) {
    for (let i = 0; i < string.length - 2; i++) {
        const a = string.charCodeAt(i);
        const b = string.charCodeAt(i + 1);
        const c = string.charCodeAt(i + 2);
        if (b === a + 1 && c === b + 1) {
            return true;
        }
    }
    return false;
}

function containsIOL(string) {
    return string.includes('i') || string.includes('o') || string.includes('l');
}

function hasTwoPairs(string) {
    let pairs = new Set();
    let i = 0;
    while (i < string.length - 1) {
        if (string[i] === string[i + 1]) {
            pairs.add(string[i]);
            i += 2;
        } else {
            i += 1;
        }
    }
    return pairs.size >= 2;
}

function passwordCorrect(password) {
    return threeContinousLetters(password)
        && !containsIOL(password)
        && hasTwoPairs(password);
}

function nextPassword(password) {
    let arr = password.split('');
    let i = arr.length - 1;
    while (i >= 0) {
        if (arr[i] === 'z') {
            arr[i] = 'a';
            i--;
        } else {
            arr[i] = alphabet[alphabet.indexOf(arr[i]) + 1];
            break;
        }
    }
    return arr.join('');
}


// Init

let password = input

while (!passwordCorrect(password)) {
    password = nextPassword(password)
}


// Result

console.log(password)