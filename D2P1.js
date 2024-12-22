const input = 
`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
;

const safeRange = { min: 1, max: 3 };

function isSafe(delta) {
    return delta >= safeRange.min && delta <= safeRange.max;
}

function foo() {
    const rows = input.split('\n');
    var safeReports = 0;

    for (let row of rows) {
        let levels = row.split(' ').map(Number);
        let result = true;
        let changeDirection = null;

        for (let i = 1; i < levels.length; i++) {
            let delta = levels[i] - levels[i - 1];
            
            if (!isSafe(Math.abs(delta)) || delta === 0) {
                result = false;
                break;
            }

            if (changeDirection === null) {
                changeDirection = (delta > 0); 
                // [TRUE] - increase 
                // [FALSE] - decrease
            } else if (changeDirection !== (delta > 0)) {
                result = false;
                break;
            }
        }
        if (result) safeReports++;
        console.log(row + (result ? " (OK)" : " (ERR)"));
    }
    console.log("\nSafe reports: " + safeReports);
}

foo();
