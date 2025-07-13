// Advent of Code 2015
// Day 19 Part 2
/// By Adisoreq


// Input

const input = `
Al => ThF
Al => ThRnFAr
B => BCa
B => TiB
B => TiRnFAr
Ca => CaCa
Ca => PB
Ca => PRnFAr
Ca => SiRnFYFAr
Ca => SiRnMgAr
Ca => SiTh
F => CaF
F => PMg
F => SiAl
H => CRnAlAr
H => CRnFYFYFAr
H => CRnFYMgAr
H => CRnMgYFAr
H => HCa
H => NRnFYFAr
H => NRnMgAr
H => NTh
H => OB
H => ORnFAr
Mg => BF
Mg => TiMg
N => CRnFAr
N => HSi
O => CRnFYFAr
O => CRnMgAr
O => HP
O => NRnFAr
O => OTi
P => CaP
P => PTi
P => SiRnFAr
Si => CaSi
Th => ThCa
Ti => BP
Ti => TiTi
e => HF
e => NAl
e => OMg

ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF
`


// Code

const lines = input.trim().split('\n');
const replacements = [];

for (const line of lines) {
    if (!line.includes(' => ')) continue; // Pomijaj puste linie
    const [from, to] = line.split(' => ');
    replacements.push([to, from]); // odwróć reguły
}

const molecule = lines[lines.length - 1]; // ostatnia linia to cząsteczka

function randomReduce(molecule, rules) {
    let steps = 0;
    while (molecule !== 'e') {
        let replaced = false;

        for (let [to, from] of rules) {
            const idx = molecule.indexOf(to);
            if (idx !== -1) {
                molecule = molecule.slice(0, idx) + from + molecule.slice(idx + to.length);
                steps++;
                replaced = true;
                break;
            }
        }

        if (!replaced) return Infinity;
    }

    return steps;
}

replacements.sort((a, b) => b[0].length - a[0].length);

let best = Infinity;

for (let i = 0; i < 1000; i++) {
    const shuffled = [...replacements].sort(() => Math.random() - 0.5);
    const steps = randomReduce(molecule, shuffled);
    if (steps < best) best = steps;
}


console.log('Replacements:')

for (let i = 0; i < replacements.length; i++) {
    if (i < 10) {
        console.log(`${replacements[i][0]} -> ${replacements[i][1]}`)
    } else {
        console.log('...')
        break
    }
}

console.log("\nMinimum steps to produce 'e':", best);