// Advent of Code 2015
// Day 14 Part 1
// By Adisoreq


// Input

const input = `
Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.
`

const time = 2503

// Code

class Reindeer {
    // Constants
    name
    speed
    flyTime
    restTime
    // Variables
    distance = 0
    timeLeft = 0
    activity = 1 // 1 = flying, 0 = resting
    
    constructor(name, speed, flyTime, restTime) {
        this.name = name
        this.speed = speed
        this.flyTime = flyTime
        this.restTime = restTime
        this.timeLeft = flyTime
    }

    update(ticks = 1) {
        if (this.activity === 1) {
            this.move(1)
        } else {
            this.rest(1)
        }
    }

    move(ticks = 1) {
        if (this.timeLeft > 0) {
            this.distance += this.speed * ticks
            this.timeLeft -= ticks
        } else {
            this.activity = 0
            this.timeLeft = this.restTime
            this.update(0)
        }
    }

    rest(ticks = 1) {
        if (this.timeLeft > 0) {
            this.timeLeft -= ticks
        } else {
            this.activity = 1
            this.timeLeft = this.flyTime
            this.update(0)
        }
    }

}

const processedInput = input.trim().split('\n').map(line => line.split(' '))

const reindeers = processedInput.map(line => {
    const name = line[0]
    const speed = line[3]
    const flyTime = line[6]
    const restTime = line[13]

    return new Reindeer(name, parseInt(speed), parseInt(flyTime), parseInt(restTime))
})

for (let i = 0; i < time; i++) {
    for (const reindeer of reindeers) {
        reindeer.update()
    }
}

let maxDistance = 0
for (const reindeer of reindeers) {
    if (reindeer.distance > maxDistance) {
        maxDistance = reindeer.distance
    }
}

const winner = reindeers.find(r => r.distance === maxDistance)

console.log(`Reindeers: ${reindeers.map(r => r.name).join(', ')}`)
console.log(`The winner is ${winner.name} with a distance of ${winner.distance} km.`)