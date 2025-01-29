let input = '1113122113';
const steps = 40;

const transform = (string) => {
    let str = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            str += ',';
        }
        str += string[i];
    }
    return str.split(',').map(group => `${group.length}${group[0]}`).join('');
}

console.log(input)

for (let i = 0; i < steps; i++) {
    input = transform(input);
    //console.log(input);
}

console.log(input.length)
