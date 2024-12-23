const input =
`....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

const rows = input.split('\n');
const h = rows.length;
const w = rows[0].length;

let gridMap = [];
let guardPosition = [];
let guardDirection = 0;
let visitedPositions = new Set(); // Use a Set for unique positions

const Direction = [
    [-1, 0], // UP
    [0, 1],  // RIGHT
    [1, 0],  // DOWN
    [0, -1]  // LEFT
];

function OutOfBounds(position) {
    return position[0] < 0 || position[0] >= h || position[1] < 0 || position[1] >= w;
}

function MoveResult(nextPosition) {
    if (OutOfBounds(nextPosition)) return 2; // Out of map
    else if (gridMap[nextPosition[0]][nextPosition[1]] === 1) return 1; // Path blocked
    else return 0; // Can go
}

function move() {
    const delta = Direction[guardDirection];
    const nextPosition = [
        guardPosition[0] + delta[0],
        guardPosition[1] + delta[1]
    ];

    switch (MoveResult(nextPosition)) {
        case 0: // Can go
            visitedPositions.add(guardPosition.join(',')); // Mark current position as visited
            guardPosition = nextPosition; // Update position
            break;
        case 1: // Path blocked
            changeDirection();
            break;
        case 2: // Out of bounds
            return false; // Stop the simulation
    }
    return true; // Continue the simulation
}

function changeDirection() {
    guardDirection = (guardDirection + 1) % 4; // Turn right
}

function ObjectToNum(char) {
    switch (char) {
        case '.': return 0;
        case '#': return 1;
        case '^': guardDirection = 0; return 0; // Start facing UP
        case '>': guardDirection = 1; return 0; // Start facing RIGHT
        case 'v': guardDirection = 2; return 0; // Start facing DOWN
        case '<': guardDirection = 3; return 0; // Start facing LEFT
        default: return 0; // In case of unexpected characters
    }
}

// Initialize the grid
for (let i = 0; i < rows.length; i++) {
    gridMap[i] = [];
    for (let j = 0; j < rows[i].length; j++) {
        gridMap[i][j] = ObjectToNum(rows[i][j]);
        if (rows[i][j] === '^' || rows[i][j] === '>' || rows[i][j] === 'v' || rows[i][j] === '<') {
            guardPosition = [i, j];
        }
    }
}

// Start the simulation
let go = true;
while (go) {
    go = move();
}

visitedPositions.add(guardPosition.join(','));
console.log("Distinct positions visited:", visitedPositions.size);
