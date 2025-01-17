/* INPUT */

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

const display = 1;
const searchedWire = 'a';

/* CODE */

const exp = [
    /^-*\d+$/,                  // 0123...
    /^[a-z]+$/,                 // abc...
    /^NOT\s[a-z]+$/,            // NOT abc...
    /^[a-z]+\sAND\s[a-z]+$/,    // abc... AND abc...
    /^[a-z]+\sOR\s[a-z]+$/,     // abc... OR abc...
    /^-*\d+\s(L|R)SHIFT\s\d+$/, // 0123... (L/R)SHIFT 0123...
    /^[a-z]+\s(L|R)SHIFT\s\d+$/ // abc... (L/R)SHIFT 0123...
];

const connections = input.trim().split('\n').map(con => con.split(' -> '));
const wires = new Map();

const performOperation = (operation, a, b) => {
    switch (operation) {
        case 'AND':
            return (a & b) & 0xFFFF;
        case 'OR':
            return (a | b) & 0xFFFF;
        case 'LSHIFT':
            return (a << b) & 0xFFFF;
        case 'RSHIFT':
            return (a >> b) & 0xFFFF;
        default:
            return null;
    }
};

// Kolejka do obsługi przetwarzania połączeń
const readyQueue = [];
const dependencyMap = new Map();

// Przygotowanie relacji wejść i wyjść
connections.forEach(([inputSignal, outputWire]) => {
    const dependencies = inputSignal.match(/[a-z]+/g) || []; // Zależności (np. x, y)
    dependencyMap.set(outputWire, { dependencies, inputSignal });

    // Jeśli brak zależności, dodaj do kolejki gotowych
    if (dependencies.every(dep => wires.has(dep))) {
        readyQueue.push(outputWire);
    }
});

// Przetwarzanie połączeń
while (readyQueue.length > 0) {
    const wire = readyQueue.shift();
    const { inputSignal } = dependencyMap.get(wire);

    if (String(inputSignal).match(exp[0])) {
        wires.set(wire, Number(inputSignal) & 0xFFFF);
    } else if (String(inputSignal).match(exp[1])) {
        const dep = inputSignal;
        if (wires.has(dep)) {
            wires.set(wire, wires.get(dep));
        }
    } else if (String(inputSignal).match(exp[2])) {
        const dep = inputSignal.replace('NOT ', '');
        if (wires.has(dep)) {
            wires.set(wire, (~wires.get(dep)) & 0xFFFF);
        }
    } else if (String(inputSignal).match(exp[3]) || String(inputSignal).match(exp[4])) {
        const [var1, op, var2] = inputSignal.split(' ');
        if (wires.has(var1) && wires.has(var2)) {
            wires.set(wire, performOperation(op, wires.get(var1), wires.get(var2)));
        }
    } else if (String(inputSignal).match(exp[5])) {
        const [num, direction, shift] = inputSignal.split(' ');
        const shiftAmount = Number(shift);
        const value = Number(num);
        wires.set(wire, direction === 'LSHIFT' ? (value << shiftAmount) & 0xFFFF : (value >> shiftAmount) & 0xFFFF);
    } else if (String(inputSignal).match(exp[6])) {
        const [variable, direction, shift] = inputSignal.split(' ');
        if (wires.has(variable)) {
            const shiftAmount = Number(shift);
            const value = wires.get(variable);
            wires.set(wire, direction === 'LSHIFT' ? (value << shiftAmount) & 0xFFFF : (value >> shiftAmount) & 0xFFFF);
        }
    }
    
    dependencyMap.forEach(({ dependencies }, key) => {
        if (dependencies.includes(wire)) {
            dependencies.splice(dependencies.indexOf(wire), 1);
            if (dependencies.length === 0) {
                readyQueue.push(key);
            }
        }
    });
}

if (display) {
    const sortedWires = new Map([...wires.entries()].sort());
    console.log(sortedWires);
}

/* OUTPUT */

console.log(`\nResult:\n${searchedWire} = ${wires.get(searchedWire)}`);
