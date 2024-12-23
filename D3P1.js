const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const regex = /mul\((\d+),(\d+)\)/gm;

const count = input.match(regex);
console.log(count);

var sum = 0;

const numbers = count.map(mul => {
    const match = mul.match(/(\d+),(\d+)/);
    return match ? [parseInt(match[1]), parseInt(match[2])] : null;
}).filter(Boolean);

console.log(numbers);

for (num of numbers) {
    sum += num[0] * num[1];
}

console.log(sum);
