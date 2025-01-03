// CONST

const input = `2333133121414131402`;

const disk = {
    blocks: [],
    
    display() {
        let out = '';
        for (let blk of disk.blocks) {
            if (blk.type === 1) out += blk.id; // Plik (1) - wyświetl ID
            else out += '.'; // Wolne miejsce (0) - wyświetl kropkę
        }
        console.log(out);
    },

    compress() {
        let leftIndex = 0;
        let rightIndex = this.blocks.length - 1;

        while (leftIndex < rightIndex) {
            if (this.blocks[leftIndex].type === 1) {
                leftIndex++;
                continue;
            }
            if (this.blocks[rightIndex].type === 0) {
                rightIndex--;
                continue;
            }
            if (this.blocks[leftIndex].type === 0 && this.blocks[rightIndex].type === 1) {
                this.swapBlocks(leftIndex, rightIndex);
            }
            this.display();
        }
        
    },

    swapBlocks(blockAIndex, blockBIndex) {
        const temp = this.blocks[blockAIndex];
        this.blocks[blockAIndex] = this.blocks[blockBIndex];
        this.blocks[blockBIndex] = temp;
    },
    
    getSum() {
        let sum = 0;
        for (let i = 0;;i++) {
            const blk = this.blocks[i];
            if (blk.type == 0) {
                break;
            }
            sum += i * blk.id;
        }
        return sum;
    }
};

// VAR

let fileID = 0;
let spaceID = 0;
let type = true; // true - plik (1), false - wolne miejsce (0)

// GENERUJEMY BLOKI NA PODSTAWIE CIĄGU 'input'

for (let i = 0; i < input.length; i++) {
    let size = Number(input[i]);
    let t = type ? 1 : 0;  // '1' dla pliku, '0' dla wolnego miejsca
    let blockID = type ? fileID : spaceID;

    for (let j = 0; j < size; j++) {
        let block = { type: t, id: blockID };
        disk.blocks.push(block);
    }

    if (type) fileID++;
    else spaceID++;
    
    type = !type;
}

disk.compress();
console.log('Sum:',disk.getSum());
