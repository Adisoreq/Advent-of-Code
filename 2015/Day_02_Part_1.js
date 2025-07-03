// Advent of Code 2015
// Day 2 Part 1
// By Adisoreq

// Insert actual input here
const input = `
2x3x4
1x1x10
` 

const areas = []
let total = 0

const dimensions = input.match(/.+/gm).map(row => row.split('x').map(Number))

for (let d of dimensions) {
    const wh = d[0] * d[1]
    const hl = d[1] * d[2]
    const lw = d[2] * d[0]
    areas.push(2*wh + 2*hl + 2*lw + Math.min(wh,hl,lw))
}

for (let i = 0; i < areas.length; ++i) {
    total += areas[i]
    console.log(`[ ${dimensions[i][0]}, ${dimensions[i][1]}, ${dimensions[i][2]} ] => ${areas[i]}`)
}

console.log(`Total area: ${total}`)
