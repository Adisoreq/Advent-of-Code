// CONST

const input = 
`2333133121414131402`;

const disk = {
    blocks: [],
    
    display() {
        let out = '';
        for (let blk of disk.blocks) {
            if (blk.type) out += blk.id;
            else out += '.';
        }
        console.log(out);
    },
    compress() {
        var leftIndex = 0;
        var rightIndex = blocks.length - 1;
    }
};

// VAR

var fileID = 0;
var spaceID = 0;
var type = true; // true - file / false - free space

// EXEC

for (let i = 0; i < input.length; i++) {
    let size = Number(input[i]);
    let t = type ? 1 : 0;
    let blockID = type ? fileID : spaceID;
    for (let j = 0; j < size; j++) {
        block = { type: t, id: blockID };
        disk.blocks.push(block);
    }
    if (type) fileID++;
    else spaceID++;
    type = !type;
}

disk.display();
