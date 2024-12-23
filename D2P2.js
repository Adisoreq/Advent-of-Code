const input = 
`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
;

const safeRange = { min: 1, max: 3 };

function checkLevels(levels) {
    let changeDirection = null;
    
    for (let i = 1; i < levels.length; i++) {
        let delta = levels[i] - levels[i - 1];
        
        if (Math.abs(delta) > safeRange.max || Math.abs(delta) < safeRange.min) {
            return false;
        }

        if (changeDirection === null) {
            changeDirection = (delta > 0); 
        } else if (changeDirection !== (delta > 0)) {
            return false;
        }
    }
    return true;
}

function canBeFixed(levels) {
    for (let i = 0; i < levels.length; i++) {
        const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        if (checkLevels(modifiedLevels)) {
            return true;
        }
    }
    return false;
}

function foo() {
    const rows = input.split('\n');
    let safeReports = 0;

    for (let row of rows) {
        let levels = row.split(' ').map(Number);
        
        let result = checkLevels(levels) || canBeFixed(levels);
        if (result) safeReports++;
        console.log(row + (result ? " (OK)" : " (ERR)"));
    }
    console.log("\nSafe reports: " + safeReports);
}

foo();
