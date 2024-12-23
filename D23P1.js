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
const connections = [];
const computerSet = new Set();

const MatchConnection = (connection, computerA, computerB) => {
    return connection.includes(computerA) && connection.includes(computerB);
}

for (let row of rows) {
    const connection = row.split('-');
    connections.push(connection);
    computerSet.add(connection[0]);
    computerSet.add(connection[1]);
}

const computers = Array.from(computerSet);
const parties = [];

for (let i = 0; i < computers.length; i++) {
    for (let j = i + 1; j < computers.length; j++) {
        for (let k = j + 1; k < computers.length; k++) {
            const party = [computers[i], computers[j], computers[k]];
            if (connections.some(con => MatchConnection(con, party[0], party[1])) &&
                connections.some(con => MatchConnection(con, party[1], party[2])) &&
                connections.some(con => MatchConnection(con, party[0], party[2]))) {
                parties.push(party);
            }
        }
    }
}

const matchingParties = [];
for (let party of parties) {
    let found = false;
    for (let computer of party) {
        if (computer[0] === 't') {
            found = true;
            break;
        }
    }
    if (found) {
        matchingParties.push(party);
    }
}

console.log("Computers:", computers);
//console.log("Single connections:", connections);
//console.log("LAN parties:", parties);
console.log("Matching parties (", matchingParties.length, "):" , matchingParties);
