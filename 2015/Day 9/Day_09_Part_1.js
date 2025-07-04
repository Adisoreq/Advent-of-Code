// Advent of Code 2015
// Day 9 Part 1
// By Adisoreq


// Input

const input = `
London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`


// Code

class City {
    constructor(name) {
        this.name = name;
        this.connections = new Map();
    }
    
    addConnection(city, distance) {
        this.connections.set(city, distance);
    }
}

class Route {
    constructor(startCity) {
        this.startCity = startCity;
        this.visitedCities = new Set();
        this.totalDistance = 0;
    }

    visit(city, distance) {
        this.visitedCities.add(city);
        this.totalDistance += distance;
    }

    toString() {
        return `${this.startCity.name} -> ${Array.from(this.visitedCities).map(city => city.name).join(' -> ')} (Total: ${this.totalDistance})`;
    }
}

function findAllRoutes(city) {
    const routes = []

    for (const [nextCity, distance] of city.connections) {
        const r = new Route(city);
        routes.push(r.visit(nextCity, distance));
    }

    return routes;
}

function permute(arr) {
    if (arr.length === 0) return [[]];
    return arr.flatMap((v, i) =>
        permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(p => [v, ...p])
    );
}

function routeDistance(route) {
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
        dist += route[i].connections.get(route[i + 1]);
    }
    return dist;
}


// Init

const lines = input.trim().split('\n')
const cities = new Map()

for (const line of lines) {
    const [route, distance] = line.split(' = ');
    const [city1, city2] = route.split(' to ');

    if (!cities.has(city1)) {
        cities.set(city1, new City(city1));
    }
    if (!cities.has(city2)) {
        cities.set(city2, new City(city2));
    }

    const cityObj1 = cities.get(city1);
    const cityObj2 = cities.get(city2);

    cityObj1.addConnection(cityObj2, parseInt(distance));
    cityObj2.addConnection(cityObj1, parseInt(distance));
}

const cityList = Array.from(cities.values());
const allRoutes = permute(cityList);

let minDistance = Infinity;
let minRoute = null;

for (const route of allRoutes) {
    const dist = routeDistance(route);
    if (dist < minDistance) {
        minDistance = dist;
        minRoute = route;
    }
}


// Results

cities.forEach((city, name) => {
    console.log(`City: ${name}`);
    city.connections.forEach((distance, connectedCity) => {
        console.log(`\t to ${connectedCity.name}: ${distance}`);
    });
})

console.log("\nShortest route:");
console.log(minRoute.map(c => c.name).join(" -> "), "=", minDistance);