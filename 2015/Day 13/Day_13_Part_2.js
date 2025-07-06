// Advent of Code 2015
// Day 13 Part 2
// By Adisoreq


// Input

const input = `
Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.
`

// Code

const arr = input.trim().split('\n')    // Split lines
    .map(line => line.trim()            // Remove white spaces
        .slice(0, -1)                   // Remove . at the end
        .split(' '))                    // Split words
    .filter(line => line.length > 0)    // Remove empty lines

const kids = arr.map((kid) => { 
    return { name: kid[0], neighbor: kid[10], happiness: kid[3] * (kid[2] == 'gain' ? 1 : -1) } 
})

let combination = [ ]

for (let i = 0; i < kids.length; i++) {
    if (!combination.includes(kids[i].name))
        combination.push(kids[i].name)
}

function permute(arr) {
    if (arr.length === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (let perm of permute(rest)) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
}

function getHappiness(perm) {
    let happinness = 0;

    for (let i = 0; i < perm.length; i++) {
        const nextIndex = (i + 1) % perm.length;
        const name = perm[i];
        const neighbor = perm[nextIndex];

        const happiness =
            (kids.find(kid => kid.name === name && kid.neighbor === neighbor)?.happiness || 0)
            + (kids.find(kid => kid.name === neighbor && kid.neighbor === name)?.happiness || 0);

        happinness += happiness;
    }

    return happinness;
}

combination = combination.concat('me')
const permutations = permute(combination)

combination = permutations[0]
let maxHappiness = getHappiness(combination)

for (let perm of permutations) {
    let happinness = getHappiness(perm);

    if (happinness > maxHappiness) {
        maxHappiness = happinness;
        combination = perm;
    }
}

// Results

console.log(`Best combination: ${combination.join(', ')}`)
console.log(`Happiness: ${maxHappiness}`)
