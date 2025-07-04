// Advent of Code 2015
// Day 3 Part 2
// By Adisoreq

const input = `^v^v^v^v^v` // Insert actual input here

const Directions = new Map([
    [ '^', [0,1] ], // North
    [ '>', [1,0] ], // East
    [ 'v', [0,-1] ], // South
    [ '<', [-1,0] ], // West
])

var santaPosition = [0, 0]
var roboSantaPosition = [0, 0]

function move(direction, isRoboSanta) {
    const deltaPos = Directions.get(direction)
    if (!isRoboSanta) {
        santaPosition[0] += deltaPos[0]
        santaPosition[1] += deltaPos[1]
    } else {
        roboSantaPosition[0] += deltaPos[0]
        roboSantaPosition[1] += deltaPos[1]
    }
}

const visited = new Set([ `0,0` ])
let count = 1

for (let i = 0; i < input.length; ++i) {
    const isRoboSanta = i % 2 === 1
    move(input[i], isRoboSanta)

    const currentPosition = isRoboSanta ? roboSantaPosition : santaPosition
    const posString = `${currentPosition[0]},${currentPosition[1]}`

    if (!visited.has(posString)) {
        visited.add(posString)
        count += 1
    }
}

console.log(count)
