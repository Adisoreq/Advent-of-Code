// Advent of Code 2015
// Day 6 Part 1
// By Adisoreq

class Board {
    #_B = [];

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sum = 0;
        for (let i = 0; i < height; i++) {
            this.#_B[i] = [];
            for (let j = 0; j < width; j++) {
                this.#_B[i][j] = false;
            }
        }
    }

    display() {
        let result = '';
        for (let row of this.#_B) {
            result += `${row.map(Number).join(' ')}\n`;
        }
        console.log(result);
    }

    setOn(x, y) { 
        if (!this.#_B[y][x]) this.sum++;
        this.#_B[y][x] = true;
    }

    setOff(x, y) { 
        if (this.#_B[y][x]) this.sum--;
        this.#_B[y][x] = false;
    }

    toggle(x, y) { 
        if (this.#_B[y][x]) {
            this.setOff(x, y);
        } else {
            this.setOn(x, y);
        }
    }

    setOnRect(start, end) {
        for (let x = start[0]; x <= end[0]; ++x) {
            for (let y = start[1]; y <= end[1]; ++y) {
                this.setOn(x, y);
            }
        }
    }

    setOffRect(start, end) {
        for (let x = start[0]; x <= end[0]; ++x) {
            for (let y = start[1]; y <= end[1]; ++y) {
                this.setOff(x, y);
            }
        }
    }

    toggleRect(start, end) {
        for (let x = start[0]; x <= end[0]; ++x) {
            for (let y = start[1]; y <= end[1]; ++y) {
                this.toggle(x, y);
            }
        }
    }
}

const display = 1 // Set to 0 if input is too large to display

// Insert actual input here
const input = `
turn on 226,196 through 599,390
turn on 240,129 through 703,297
turn off 313,306 through 363,621
toggle 173,401 through 496,407
toggle 333,60 through 748,159
`;

const exp = /^(turn (on|off)|toggle)\s(\d+,\d+)\sthrough\s(\d+,\d+)$/gm;
const matches = [...input.matchAll(exp)];

let lights = new Board(1000, 1000);

for (let match of matches) {
    const commandString = match[0];
    const action = match[1].trim();
    const startPoint = match[3].split(',').map(Number);
    const endPoint = match[4].split(',').map(Number);
    if (display)
        console.log(`[${action}] : ${startPoint} -> ${endPoint}`);
    
    switch (action) {
        case 'turn on': 
            lights.setOnRect(startPoint, endPoint);
            break;
        case 'turn off':
            lights.setOffRect(startPoint, endPoint);
            break;
        case 'toggle':
            lights.toggleRect(startPoint, endPoint);
            break;
        default: break;
    }
}

console.log("Total switched on lights:", lights.sum);
