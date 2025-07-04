// Advent of Code 2015
// Day 3 Part 1
// By Adisoreq

const input = `^>v<` // Insert actual input here

const Directions = new Map([
    [ '^', [0,1] ], // North
    [ '>', [1,0] ], // East
    [ 'v', [0,-1] ], // South
    [ '<', [-1,0] ], // West
])

var position = [0, 0]

function move(direction) {
    const deltaPos = Directions.get(direction)
    position[0] += deltaPos[0]
    position[1] += deltaPos[1]
}

const visited = new Set([ `${position[0]},${position[1]}` ])
let count = 1

for (let char of input) {
    move(char)
    const posString = `${position[0]},${position[1]}`
    if (!visited.has(posString)) {
        visited.add(posString)
        count += 1
    }
}

console.log(count)
