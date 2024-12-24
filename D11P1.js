const input = '125 17';

const stones = input.split(' ').map(Number);
var blinks = 0;

function isEven(number) {
    return number % 2 == 0;
}

function blink() {
    blinks++;
    for (let i = 0; i < stones.length; i++) {
        // If the stone is engraved with the number 0, it is replaced by a stone engraved with the number 1.
        if (stones[i] == 0) {
            stones[i] = 1;
        }
        // If the stone is engraved with a number that has an even number of digits, it is replaced by two stones. The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone. (The new numbers don't keep extra leading zeroes: 1000 would become stones 10 and 0.)
        else if (isEven(String(stones[i]).length)) {
            const str = String(stones[i]);
            const len = str.length;
            
            var l = Number(str.substr(0, len / 2));
            var r = Number(str.substr(len / 2, len / 2));
            
            stones.splice(i, 1, l, r);
            i++;
        }
        // If none of the other rules apply, the stone is replaced by a new stone; the old stone's number multiplied by 2024 is engraved on the new stone.
        else {
            stones[i] *= 2024;
        }
    }
}

console.log(blinks + '.', stones);

for (let i = 0; i < 25; i++) {
    blink();
    console.log(blinks + '.', (i < 4 ? stones : stones.length + " stones"));
}
