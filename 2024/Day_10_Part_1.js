/* Unfinished, do not use

const input =
`0123
1234
8765
9876`;

const minValue = 0;
const maxValue = 9;

class Board {
    #values = [];
    constructor(array = []) {
        this.#values = array;
        this.height = array.length;
        this.width = array[0]?.length || 0;
    }
    get(row, column) {
        return this.#values[row][column];
    }
    getFromPosition(position) {
        return this.get(position[0], position[1]);
    }
    set(row, column, value) {
        this.#values[row][column] = value;
    }
    setFromPosition(position, value) {
        this.set(position[0], position[1], value);
    }
    isOutOfBonds(row, column) {
        return row < 0 || column < 0 || row >= this.height || column >= this.width;
    }
    isOutOfBondsPosition(position) {
        return this.isOutOfBonds(position[0], position[1]);
    }
    display() {
        for (let row of this.#values) {
            console.log(row.join(' '));
        }
    }
    findAll(value) {
        let result = [];
        for (let row = 0; row < this.#values.length; row++) {
            for (let col = 0; col < this.#values[row].length; col++) {
                if (this.#values[row][col] === value) {
                    result.push([row, col]);
                }
            }
        }
        return result;
    }
}

class Trail {
    constructor(startPoint = [0, 0]) {
        this.startPoint = startPoint;
        this.endPoints = [];
    }
}

const Direction = {
    UP: [ -1, 0 ],
    RIGHT: [ 0, 1 ],
    DOWN: [ 1, 0 ],
    LEFT: [ 0, -1 ]
}

class Walker {
    #value = 0;
    position = [];
    Walker(position = [], value = 0) {
        this.position = position;
        this.value = value;
    }
    move(deltaRows = 0, deltaCols = 0) {
        this.position[0] += deltaRows;
        this.position[1] += deltaCols;
    }
    move(position = []) {
        this.move(position[0], position[1])
    }
    getValue() {
        return this.#value;
    }
    setValue(value = this.#value) {
        this.#value = value;
    }
}

const nums = input.split('\n').map(row => row.split('').map(Number));

const board = new Board(nums);
board.display();

const trails = [];
const walkers = [];

for (let zeroPoint of board.findAll(0)) {
    trails.push(new Trail(zeroPoint));
}

for (let t of trails) {

}

console.log();
console.log(trails);

*/