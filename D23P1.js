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

const matchingParties = [];

const computers = Array.from(connections.keys());
const computersCount = computers.length;

for (let i = 0; i < computersCount; i++) {
    for (let j = i + 1; j < computersCount; j++) {
        for (let k = j + 1; k < computersCount; k++) {
            const computerA = computers[i];
            const computerB = computers[j];
            const computerC = computers[k];

            // Check if all three computers are connected
            if (
                connections.get(computerA).has(computerB) &&
                connections.get(computerB).has(computerC) &&
                connections.get(computerA).has(computerC)
            ) {
                matchingParties.push([computerA, computerB, computerC]);
            }
        }
    }
}

const filteredParties = matchingParties.filter(party => party.some(computer => computer[0] === 't'));

console.log("Computers:", computers);
console.log("Matching parties (", filteredParties.length, "):", filteredParties);
