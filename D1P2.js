const input = 
`3   4
4   3
2   5
1   3
3   9
3   3`;

function foo() {
    const rows = input.trim().split('\n');
    let score = 0;

    const left = [];
    const rightCount = {};

    for (let row of rows) {
        let element = row.split(/\s+/).map(Number);
        left.push(element[0]);
        const rightValue = element[1];
        rightCount[rightValue] = (rightCount[rightValue] || 0) + 1; // Zlicz wystąpienia
    }

    for (let l of left) {
        if (rightCount[l]) {
            score += l * rightCount[l];
        }
    }

    console.log(input);
    console.log("\nScore: " + score);
}

foo();
