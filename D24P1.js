const input =
`x00: 1
x01: 0
x02: 1
x03: 1
x04: 0
y00: 1
y01: 1
y02: 1
y03: 1
y04: 1

ntg XOR fgs -> mjb
y02 OR x01 -> tnw
kwq OR kpj -> z05
x00 OR x03 -> fst
tgd XOR rvg -> z01
vdt OR tnw -> bfw
bfw AND frj -> z10
ffh OR nrd -> bqk
y00 AND y03 -> djm
y03 OR y00 -> psh
bqk OR frj -> z08
tnw OR fst -> frj
gnj AND tgd -> z11
bfw XOR mjb -> z00
x03 OR x00 -> vdt
gnj AND wpb -> z02
x04 AND y00 -> kjc
djm OR pbm -> qhw
nrd AND vdt -> hwm
kjc AND fst -> rvg
y04 OR y02 -> fgs
y01 AND x02 -> pbm
ntg OR kjc -> kwq
psh XOR fgs -> tgd
qhw XOR tgd -> z09
pbm OR djm -> kpj
x03 XOR y03 -> ffh
x00 XOR y04 -> ntg
bfw OR bqk -> z06
nrd XOR fgs -> wpb
frj XOR qhw -> z04
bqk OR frj -> z07
y03 OR x01 -> nrd
hwm AND bqk -> z03
tgd XOR rvg -> z12
tnw OR pbm -> gnj`;

const rows = input.split('\n');

const wires = new Map();
const Gates = ['AND', 'XOR', 'OR'];

let bits = [];

let repeat = true;

function Gate(gate, A, B) {
    switch (gate) {
        case 'AND': return A && B ? 1 : 0;
        case 'OR': return A || B ? 1 : 0;
        case 'XOR': return (A && !B) || (!A && B) ? 1 : 0;
    }
}

function setWire(wire, value) {
    wires.set(wire, value);
    if (wire[0] === 'z') {
        let w = Number(wire.slice(1));
        bits[w] = value;
    }
}

while (repeat) {
    repeat = false;
    for (let row of rows) {
        if (row.trim() === '') continue;

        if (row.includes(':')) {
            const [wire, value] = row.split(':').map(e => e.trim());
            setWire(wire, Number(value));
            continue;
        }

        const [expression, output] = row.split(' -> ').map(e => e.trim());

        for (let gate of Gates) {
            if (expression.includes(` ${gate} `)) {
                const [A, B] = expression.split(` ${gate} `).map(e => e.trim());

                if (wires.has(A) && wires.has(B)) {
                    const result = Gate(gate, wires.get(A), wires.get(B));
                    setWire(output, result);
                } else {
                    repeat = true;
                }
                break;
            }
        }
    }
}

let reverseBits = [];

let result = 0;

for (let i = bits.length - 1; i >= 0; i--) {
    reverseBits.push(bits[i]);
    result += bits[i] * (2 ** i);
}

let output = reverseBits.join('');

//console.log(wires);
console.log(output);
console.log(result);
