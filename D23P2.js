const input =
`kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`;

const rows = input.split('\n');
const connections = new Map();

rows.forEach(row => {
    const [computerA, computerB] = row.split('-');
    if (!connections.has(computerA)) connections.set(computerA, new Set());
    if (!connections.has(computerB)) connections.set(computerB, new Set());
    connections.get(computerA).add(computerB);
    connections.get(computerB).add(computerA);
});

const findLargestClique = (connections) => {
    const computers = Array.from(connections.keys());

    // Bron-Kerbosch algorithm
    const bronKerbosch = (R, P, X, largestClique) => {
        if (P.size === 0 && X.size === 0) {
            // R -> Max ?
            if (R.size > largestClique.size) {
                largestClique = new Set(R);
            }
            return largestClique;
        }

        // Iterate over all computers in P
        for (let v of P) {
            let newR = new Set(R);
            newR.add(v);

            let newP = new Set();
            let newX = new Set();

            // P[v], X[v]
            for (let neighbor of connections.get(v)) {
                if (P.has(neighbor)) newP.add(neighbor);
                if (X.has(neighbor)) newX.add(neighbor);
            }

            largestClique = bronKerbosch(newR, newP, newX, largestClique);

            P.delete(v);
            X.add(v);
        }

        return largestClique;
    };

    let largestClique = new Set();
    let P = new Set(computers);
    let X = new Set();

    largestClique = bronKerbosch(new Set(), P, X, largestClique);

    return Array.from(largestClique);
};

const result = findLargestClique(connections).sort();

console.log("Largest LAN Party:");
console.log(` - members: ${result.length}\n - password: ${result.join(',')}`);
