// Advent of Code 2015
// Day 7 Part 1
// By Adisoreq

// Input

// Replace with actual input
const input = `
123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i

x AND y -> a
`

const searchedWire = 'a'

const display = true

// Code

const connections = input.trim().split('\n').map(con => con.split(' -> '));
const wires = new Map();
const instructions = new Map();

for (const [inputSignal, outputWire] of connections) {
    instructions.set(outputWire, inputSignal);
}

function getValue(token) {
    if (/^\d+$/.test(token)) return Number(token) & 0xFFFF;
    if (wires.has(token)) return wires.get(token);

    const expr = instructions.get(token);
    let match;

    if (!expr) return undefined;

    if (/^\d+$/.test(expr)) {
        wires.set(token, Number(expr) & 0xFFFF);
    } else if (/^[a-z]+$/.test(expr)) {
        wires.set(token, getValue(expr));
    } else if ((match = expr.match(/^NOT ([a-z]+|\d+)$/))) {
        wires.set(token, (~getValue(match[1])) & 0xFFFF);
    } else if ((match = expr.match(/^([a-z]+|\d+) AND ([a-z]+|\d+)$/))) {
        wires.set(token, (getValue(match[1]) & getValue(match[2])) & 0xFFFF);
    } else if ((match = expr.match(/^([a-z]+|\d+) OR ([a-z]+|\d+)$/))) {
        wires.set(token, (getValue(match[1]) | getValue(match[2])) & 0xFFFF);
    } else if ((match = expr.match(/^([a-z]+|\d+) LSHIFT (\d+)$/))) {
        wires.set(token, (getValue(match[1]) << Number(match[2])) & 0xFFFF);
    } else if ((match = expr.match(/^([a-z]+|\d+) RSHIFT (\d+)$/))) {
        wires.set(token, (getValue(match[1]) >> Number(match[2])) & 0xFFFF);
    } else {
        wires.set(token, undefined);
    }
    return wires.get(token);
}

for (const wire of instructions.keys()) {
    getValue(wire);
}

// Results

if (display) {
    const sortedWires = new Map([...wires.entries()].sort());
    for (const [wire, value] of sortedWires) {
        console.log(`${wire}: ${value}`);
    }
}

console.log(`\nResult:\n${searchedWire} = ${wires.get(searchedWire)}`);