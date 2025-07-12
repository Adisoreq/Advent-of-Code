// Advent of Code 2015
// Day 21 Part 1
// By Adisoreq


// Input

const input = `
Hit Points: 104
Damage: 8
Armor: 1
`

const playerHP = 100


// Code

class Entity {
    name = ''
    hp = 0

    constructor(name, hp = 0) {
        this.name = name
        this.hp = hp
    }

    damage = () => 0
    armor = () => 0
    isDead = () => this.hp <= 0

    getDamage(damage) {
        const dmg = Math.max((damage - this.armor()), 1)
        this.hp -= dmg
        return dmg
    }

    attack(other) {
        return other.getDamage(this.damage())
    }
}

class Player extends Entity {
    equipment

    constructor(hp, equipment = new Equipment()) {
        super('Player', hp)
        this.equipment = equipment

        this.damage = () => this.equipment.totalDamage()
        this.armor = () => this.equipment.totalArmor()
    }
}

class Boss extends Entity {
    dmg
    arm

    constructor(hp, damage, armor) {
        super('Boss', hp)
        this.dmg = damage
        this.arm = armor

        this.damage = () => this.dmg
        this.armor = () => this.arm
    }
}

const ItemType = {
    Weapon: 1,
    Armor: 2,
    Ring: 3
}

class Item {
    type
    name
    cost
    damage
    armor

    constructor(type, name, cost, damage, armor) {
        this.type = type
        this.name = name
        this.cost = cost
        this.damage = damage
        this.armor = armor
    }

    toString() {
        return `${this.name} (${this.cost} / ${this.damage} / ${this.armor})`
    }
}

class Equipment {
    items = []

    constructor(items = []) {
        this.items = items
    }

    totalCost() {
        var cost = 0
        for (let item of this.items) {
            cost += item.cost
        }
        return cost
    }

    totalDamage() {
        var dmg = 0
        for (let item of this.items) {
            dmg += item.damage
        }
        return dmg
    }

    totalArmor() {
        var arm = 0
        for (let item of this.items) {
            arm += item.armor
        }
        return arm
    }

    toString() {
        let str = `Equipment:\n > Items (cost / damage / armor):`
        str += this.items.map(item => `\n  - ${item.toString()}`)
        str += `\n > Total: ( ${this.totalCost()} / ${this.totalDamage()} / ${this.totalArmor()} )`
        return str
    }
}

class ItemShop {
    static Weapons = new Map([
        ['Dagger', new Item(ItemType.Weapon, 'Dagger', 8, 4, 0)],
        ['Shortsword', new Item(ItemType.Weapon, 'Shortsword', 10, 5, 0)],
        ['Warhammer', new Item(ItemType.Weapon, 'Warhammer', 25, 6, 0)],
        ['Longsword', new Item(ItemType.Weapon, 'Longsword', 40, 7, 0)],
        ['Greataxe', new Item(ItemType.Weapon, 'Greataxe', 74, 8, 0)]
    ])
    static Armor = new Map([
        ['Leather', new Item(ItemType.Armor, 'Leather', 13, 0, 1)],
        ['Chainmail', new Item(ItemType.Armor, 'Chainmail', 31, 0, 2)],
        ['Splintmail', new Item(ItemType.Armor, 'Splintmail', 35, 0, 3)],
        ['Bandedmail', new Item(ItemType.Armor, 'Bandedmail', 75, 0, 4)],
        ['Platemail', new Item(ItemType.Armor, 'Platemail', 102, 0, 5)]
    ])
    static Rings = new Map([
        ['Damage +1', new Item(ItemType.Ring, 'Damage +1', 25, 1, 0)],
        ['Damage +2', new Item(ItemType.Ring, 'Damage +2', 50, 2, 0)],
        ['Damage +3', new Item(ItemType.Ring, 'Damage +3', 100, 3, 0)],
        ['Defense +1', new Item(ItemType.Ring, 'Defense +1', 20, 0, 1)],
        ['Defense +2', new Item(ItemType.Ring, 'Defense +2', 40, 0, 2)],
        ['Defense +3', new Item(ItemType.Ring, 'Defense +3', 80, 0, 3)]
    ])

    static getAllCombinations() {
        const combinations = []

        const weapons = Array.from(this.Weapons.values())
        const armors = [null, ...Array.from(this.Armor.values())]
        const rings = Array.from(this.Rings.values())

        const ringCombos = [
            [],
            ...rings.map(r => [r]),
            ...rings.flatMap((r1, i) =>
                rings.slice(i + 1).map(r2 => [r1, r2])
            )
        ]

        for (let weapon of weapons) {
            for (let armor of armors) {
                for (let ringCombo of ringCombos) {
                    const combination = [weapon]
                    if (armor) combination.push(armor)
                    combination.push(...ringCombo)
                    combinations.push(combination)
                }
            }
        }

        return combinations
    }
}

class Fight {
    fighters = []
    #const_fighters = []
    turn = 0
    winner = null

    constructor(fighterA, fighterB) {
        this.fighters = [fighterA, fighterB]
        this.#const_fighters = [fighterA, fighterB]
    }

    attacker = () => this.fighters[this.turn]
    defender = () => this.fighters[1 - this.turn]

    fighterDead = () => this.fighters[0].isDead() || this.fighters[1].isDead()

    nextTurn(print = false) {
        const attacker = this.attacker()
        const defender = this.defender()
        const defHPBefore = defender.hp
        const dmg = attacker.attack(defender)

        if (print) {
            console.log(`${attacker.name} [${attacker.hp}] deals ${dmg} damage to ${defender.name} [${defHPBefore} -> ${defender.hp}]`)
        }

        this.turn = 1 - this.turn
    }

    fight(print = false) {
        while (true) {
            this.nextTurn(print)

            if (this.fighterDead()) {
                this.winner = 1 - this.turn
                if (print) {
                    console.log(`${this.fighters[this.winner].name} wins`)
                }
                break
            }
        }
    }

}

class BossFight extends Fight {
    bossStats

    constructor(playerItems, bossStatsMap) {
        super(
            new Player(playerHP, new Equipment(playerItems)), 
            new Boss(bossStatsMap.get('Hit Points'), bossStatsMap.get('Damage'), bossStatsMap.get('Armor'))
        )
        this.bossStats = bossStatsMap
    }

    player = () => this.fighters[0]
    boss = () => this.fighters[1]

    playerWon = () => this.winner === 0

    reset() {
        this.fighters[0] = new Player(playerHP, new Equipment([...this.player().equipment.items]))
        this.fighters[1] = new Boss(this.bossStats.get('Hit Points'), this.bossStats.get('Damage'), this.bossStats.get('Armor'))
        this.winner = null
        this.turn = 0
    }
}


// Init

const bossStats = new Map(input.trim().split('\n').map(line => {
    const l = line.split(': ')
    l[1] = Number(l[1])
    return l
}))


const combos = ItemShop.getAllCombinations()

const bossfights = []

combos.forEach((eq) => {
    const bossfight = new BossFight(eq, bossStats)
    bossfight.fight()
    if (bossfight.playerWon()) {
        bossfights.push(bossfight)
    }
})

let optimalBossfight = bossfights[0]

bossfights.forEach((bossfight) => {
    if (bossfight.player().equipment.totalCost() < optimalBossfight.player().equipment.totalCost()) {
        optimalBossfight = bossfight
    }
})


// Results

console.log('------------------------\n         Player\n------------------------')
console.log(`\nHit Points: ${playerHP}\n`)
console.log(optimalBossfight.player().equipment.toString())
console.log('\n------------------------\n         Boss\n------------------------\n')
bossStats.keys().forEach((k) => {
    console.log(`${k}: ${bossStats.get(k)}`)
})

console.log('\n------------------------\n         Fight\n------------------------\n')
optimalBossfight.reset()
optimalBossfight.fight(true)