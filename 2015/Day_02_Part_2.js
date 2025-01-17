const display = 1 // Set to 0 if input is too large to display

// Insert actual input here
const input = `
2x3x4
1x1x10
` 

const ribbons = []
let total = 0

const dimensions = input.match(/.+/gm).map(row => row.split('x').map(Number))

for (let d of dimensions) {
    const bow = d[0] * d[1] * d[2]
    
    const temp = [...d]
    const max = Math.max(...temp)
    var index = temp.indexOf(max)
    if (index > -1)
        temp.splice(index, 1);
    
    const wrap = 2 * temp[0] + 2 * temp[1]
    
    if (display)
        console.log(`[${d}] => ${bow} + ${wrap} = ${bow + wrap}`)
    
    total += bow + wrap
}

console.log(`Total area: ${total}`)
