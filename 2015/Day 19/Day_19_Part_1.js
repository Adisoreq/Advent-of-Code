// Advent of Code 2015
// Day 19 Part 1
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

const processedInput = input.trim().split('\n')

const replacements = new Map([])

for (let i = 0; i < processedInput.length - 2; i++) {
    const line = processedInput[i].split(' => ')
    const key = line[0]
    const replacement = line[1]

    if(replacements.has(key)) {
        replacements.get(key).add(replacement)
    } else {
        replacements.set(key, new Set([replacement]))
    }
}

const originalChain = processedInput[processedInput.length - 1]

const result = new Set();

for (let [key, replacementsSet] of replacements.entries()) {
    const regex = new RegExp(key, 'g');

    let match;
    while ((match = regex.exec(originalChain)) !== null) {
        for (let replacement of replacementsSet) {
            const before = originalChain.slice(0, match.index);
            const after = originalChain.slice(match.index + key.length);
            const newMolecule = before + replacement + after;
            result.add(newMolecule);
        }
        regex.lastIndex = match.index + 1;
    }
}


// Results

console.log('Replacements:')

for (let key of replacements.keys()) {
    console.log(`${key} -> ${Array.from(replacements.get(key)).join(', ')}`)
}

console.log()
console.log("Chain:", originalChain)

console.log()
console.log(`Total unique molecules: ${result.size}`);
