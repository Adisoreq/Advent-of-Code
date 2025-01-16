// Insert actual input here
const input = `
2x3x4
1x1x10
` 

const areas = []

const dimensions = input.match(/.+/gm).map(row => row.split('x').map(Number))

for (let d of dimensions) {
    const w = d[0]
    const h = d[1]
    const l = d[2]
    areas.push(2*w*h + 2*w*l + 2*l*h)
}

for (let i = 0; i < areas.length; ++i) {
    console.log(`[ ${dimensions[i][0]}, ${dimensions[i][1]}, ${dimensions[i][2]} ] => ${areas[i]}`)
}
