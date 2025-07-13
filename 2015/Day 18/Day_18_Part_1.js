// Advent of Code 2015
// Day 18 Part 1
// By Adisoreq


// Input

const input = `
.#.#.#
...##.
#....#
..#...
#.#..#
####..
`


// Code

class Point {
    x; y;

    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}

class Board {
    width
    height
    values

    constructor(values = []) {
        this.values = values

        this.height = this.values.length
        this.width = this.values[0].length
    }

    get(point) {
        return this.values[point.y][point.x]
    }
    
    set(point, value) {
        this.values[point.y][point.x] = value
    }

    getNeighborPositions(point) {
        const positions = [];
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = point.x + dx;
                const ny = point.y + dy;
                if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                    positions.push(new Point(nx, ny));
                }
            }
        }
        return positions;
    }

    getNeighborCount(point) {
        return this.getNeighborPositions(point).length
    }

    getNeighborValues(point) {
        const values = []
        for (let pos of this.getNeighborPositions(point)) {
            values.push(this.get(pos))
        }
        return values
    }

    print() {
        for (let v of this.values) {
            console.log(v.join('').replaceAll('1', '#').replaceAll('0', '.'))
        }
    }
}

function sumArray(array) {
    var sum = 0
    for (let element of array) {
        sum += element
    }
    return sum
}

function step(board) {
        const newValues = [];
        for (let y = 0; y < board.height; y++) {
            const row = [];
            for (let x = 0; x < board.width; x++) {
                const pt = new Point(x, y);
                const light = board.get(pt);
                const neighborsOn = sumArray(board.getNeighborValues(pt));
                if (light === 1) {
                    row.push(neighborsOn === 2 || neighborsOn === 3 ? 1 : 0);
                } else {
                    row.push(neighborsOn === 3 ? 1 : 0);
                }
            }
            newValues.push(row);
        }
        return new Board(newValues);
    }


// Init

const processedInput = input.trim().split('\n').map(line => line.split('').map(light => light === '#' ? 1 : 0))

let board = new Board(processedInput)

const nextStep = (print = false) => {
    board = step(board)

    if (print) {
        console.log("======");
        board.print()
    }
}

let totalLightsOn = 0


// Results

board.print();

for (let i = 1; i <= 99; i++) {
    nextStep()
}

nextStep(true) // 100

for (let r of board.values) {
    for (let l of r) {
        totalLightsOn += l
    }
}

console.log(`Total lights on: ${totalLightsOn}`)