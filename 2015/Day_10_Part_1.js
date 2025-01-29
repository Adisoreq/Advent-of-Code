const input = `1113122113`;

let str = input[0]; // Zaczynamy od pierwszej cyfry

for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
        str += ','; // Dodajemy przecinek, jeśli cyfra się zmienia
    }
    str += input[i]; // Dodajemy aktualną cyfrę
}

const output = str.split(',').map(group => { return `${group.length}${group[0]}` })

console.log(output.join(''))
