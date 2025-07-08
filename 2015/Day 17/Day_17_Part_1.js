// Advent of Code 2015
// Day 17 Part 1
// By Adisoreq


// Input

const input = `
20
15
10
5
5
`

const liters = 25

const outputLimit = 10


// Code

let _nextID = 1

const nextID = () => {
    let id = _nextID
    _nextID += 1
    return id
}

class Gene {
    id = null
    value = null
    prev = null
    next = null

    constructor(id, value) {
        this.id = id
        this.value = value
    }

    setNext(gene) {
        this.next = gene
        gene.prev = this
    }

    setPrevious(gene) {
        this.prev = gene
        gene.next = this
    }
}

class Genotype {
    genePool = []
    genes = []

    constructor(genePool, genes = []) {
        this.genePool = genePool
        this.genes = genes
    }

    addGene(gene) {
        if (this.genes.length > 0) {
            this.genes[this.genes.length - 1].setNext(gene)
        }
        this.genes.push(gene)
    }

    addGeneValue(value) {
        this.addGene(new Gene(nextID(), value))
    }

    addGeneValues(arr) {
        for (let v of arr) {
            this.addGeneValue(v)
        }
    }

    getKey() {
        return this.genes
            .map(g => g.id)
            .sort((a, b) => a - b)
            .join('-');
    }

    toString() {
        if (this.genes.length === 0) return '[]';
        let str = this.genes[0].value;
        for (let i = 1; i < this.genes.length; i++) {
            str += `-${this.genes[i].value}`;
        }
        return str;
    }

    sum() {
        return this.genes.reduce((sum, gene) => sum + gene.value, 0)
    }
}

class Generation {
    number = 1
    genotypes = []
    
    _filterGt = () => true

    constructor(genotypes = [], genotypeFilterHandler = (genotype) => { return true; }) {
        this.genotypes = genotypes
        this._filterGt = genotypeFilterHandler
    }
    
    mutate() {
        const newGenotypes = []
        const codes = new Set()

        this.genotypes.forEach((genotype) => {
            const pool = genotype.genePool
            
            for (let i = 0; i < pool.length; i++) {
                if (genotype.genes.includes(pool[i])) continue

                const newGenes = genotype.genes.slice()

                for (let j = 1; j < newGenes.length; j++) {
                    newGenes[j - 1].setNext(newGenes[j])
                }

                const newGene = pool[i]

                if (newGenes.length > 0) {
                    newGenes[newGenes.length - 1].setNext(newGene)
                }

                newGenes.push(newGene)

                const newGt = new Genotype(pool, newGenes)
                
                const key = newGt.getKey();
                if (!codes.has(key) && this._filterGt(newGt)) {
                    newGenotypes.push(newGt)
                    codes.add(key)
                }
            }
        })
        this.genotypes = newGenotypes
    }

    population() {
        return this.genotypes.length
    }

    toString() {
        let str = `Gen ${this.number}:`
        let i = 1
        for (let gt of this.genotypes) {
            str += `\n> ${gt.toString()}`
            i++
            if (i > outputLimit && outputLimit !== 0) {
                str += '\n...'
                break
            }
        }
        str += '\n'
        return str
    }
}

class Timeline {
    generations = []
    successfulGenotypes = new Set()

    _succGen = () => {}

    constructor(firstGeneration, successfulGenotypeFunction = (genotype) => false) {
        this.generations = [firstGeneration]
        this._succGen = successfulGenotypeFunction
    }

    lastGeneration() {
        return this.generations[this.generations.length - 1]
    }

    nextGeneration() {
        const lastGen = this.lastGeneration()
        const newGen = new Generation(lastGen.genotypes, lastGen._filterGt)
        newGen.number = lastGen.number + 1
        newGen.mutate()
        if (newGen.population() > 0) {
            this.generations.push(newGen)
        }

        for (let g of this.generations) {
            for (let gt of g.genotypes) {
                if (this._succGen(gt)) {
                    this.successfulGenotypes.add(gt)
                }
            }
        }
    }

    totalPopulation() {
        let tp = 0
        this.generations.forEach(gen => tp += gen.population())
        return tp
    }

    print() {
        var i = 0
        for (let gen of this.generations) {
            console.log(gen.toString())
            i++
            if (i >= outputLimit && outputLimit !== 0) {
                console.log('...\n')
                break
            }
        }
    }

    printMatching() {
        var i = 0
        var str = ''
        for (let sg of this.successfulGenotypes) {
            str += `> ${sg.toString()}\n`
            i++
            if (i > outputLimit && outputLimit !== 0) {
                str += '...\n'
                break
            }
        }
        console.log(str)
    }
}


// Init

const containers = input.trim().split('\n').filter(line => line.length > 0).map(Number)
const pool = containers.map(value => new Gene(nextID(), value))

const firstGenotypes = pool.map(gene => {
    return new Genotype(pool, [gene])
})

const matchFunction = (gt) => gt.sum() <= liters
const fitFunction = (gt) => gt.sum() === liters

const firstGen = new Generation(firstGenotypes, matchFunction)
const tl = new Timeline(firstGen, fitFunction)

for (let i = 0; i < containers.length - 1; i++) {
    tl.nextGeneration()
}


// Results

tl.print()
console.log(`Matching combinations (${tl.successfulGenotypes.size}):`)
tl.printMatching()