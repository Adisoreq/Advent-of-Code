// Enter actual input here
const input = `
uxcplgxnkwbdwhrp
suerykeptdsutidb
dmrtgdkaimrrwmej
ztxhjwllrckhakut
gdnzurjbbwmgayrg
gjdzbtrcxwprtery
fbuqqaatackrvemm
pcjhsshoveaodyko
lrpprussbesniilv
mmsebhtqqjiqrusd
`;

const regex = [
    /^.*[aeiou].*[aeiou].*[aeiou].*$/,
    /(.)\1/,
    /^(?!.*(ab|cd|pq|xy)).*$/
];

const str = input.trim().split('\n');
const ok = [];

let count = 0;

for (let line of str) {
    if (line.match(regex[0]) && line.match(regex[1]) && line.match(regex[2])) {
        ok.push(line);
        count++;
    }
}

console.log(ok, '\n' + count);
