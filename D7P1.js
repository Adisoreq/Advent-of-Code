const input =
`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const equations = [];
const okEquations = [];
let sum = 0;

const rows = input.split('\n');

for (let row of rows) {
    let eq = row.split(':');
    eq[0] = Number(eq[0]);
    eq[1] = eq[1].split(' ').map(Number);
    let equation = { result: eq[0], coefficients: eq[1] };
    equations.push(equation);
    if (testEquation(equation)) {
        okEquations.push(equation);
        sum += equation.result;
    }
}

function opFlagToSet(flag, length) {
    var opSet = [];
    for (let i = 0; i < length; i++) {
        let base = 2 ** i;
        opSet.push((flag & base) === base);
    }
    return opSet;
}

function opSetToFlag(opSet) {
    var opFlag = 0;
    for (let i = 0; i < opSet.length; i++) {
        let base = 2 ** i;
        if (opSet[i]) {
            opFlag += base;
        }
    }
    return opFlag;
}

function newOperatorSet(length) {
    return opFlagToSet(0, length);
}

function nextOperatorSet(opSet) {
    return opFlagToSet(opSetToFlag(opSet) + 1, opSet.length);
}

function testEquation(equation) {
    const result = equation.result;
    const coeff = equation.coefficients;
    var operations = coeff.length - 1;
    var steps = 2 ** operations;
    
    for (let i = 0; i < steps; i++) {
        let calculation = coeff[0];
        let opSet = opFlagToSet(i, operations);
        
        for (let j = 1; j <= operations; j++) {
            if (opSet[j - 1])
                calculation *= coeff[j];
            else
                calculation += coeff[j];
        }
        if (calculation === result) {
            // Zmiana tutaj
            var out = result + " = " + coeff[0];
            for (let j = 0; j < operations; j++) {
                out += (opSet[j] ? " * " : " + ") + coeff[j + 1];
            }
            console.log(out.replace('= 0 + ', '= '));
            return true;
        }
    }
    return false;
}

console.log("Sum:", sum);
