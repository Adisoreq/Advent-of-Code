// Advent of Code 2015
// Day 15 Part 1
// By Adisoreq


// Input

const input = `
Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3
`

const ingredientsAmount = 100


// Code

class IProperties {
    capacity
    durability
    flavor
    texture
    calories
    
    constructor(capacity = 0, durability = 0, flavor = 0, texture = 0, calories = 0) {
        this.capacity = capacity;
        this.durability = durability;
        this.flavor = flavor;
        this.texture = texture;
        this.calories = calories;
    }

    add(other) {
        this.capacity += other.capacity
        this.durability += other.durability
        this.flavor += other.flavor
        this.texture += other.texture
        this.calories += other.calories
    }

    multiply(factor) {
        this.capacity *= factor
        this.durability *= factor
        this.flavor *= factor
        this.texture *= factor
        this.calories *= factor
    }
}

class Ingredient extends IProperties {
    constructor(name, capacity, durability, flavor, texture, calories) {
        super(capacity, durability, flavor, texture, calories)
        this.name = name
    }
}

class Cookie extends IProperties {
    constructor(capacity, durability, flavor, texture, calories) {
        super(capacity, durability, flavor, texture, calories)
    }

    multiplyProps() {
        return Math.max(0, this.capacity) *
            Math.max(0, this.durability) *
            Math.max(0, this.flavor) *
            Math.max(0, this.texture)
    }

    toString() {
        var str = 'Cookie {'

        for (let prop of Object.entries(this)) {
            str += `\n  ${prop[0]}: ${prop[1]}`
        }
        str += '\n}'

        return str
    }
}

class Recipe {
    ingredients = []

    constructor() {}

    addIngredient(ingredient, amount) {
        this.ingredients.push({ ingredient: ingredient, amount: amount });
    }

    makeCookie() {
        let cookie = new Cookie()
        for(let i of this.ingredients) {
            let prop = new IProperties(
                i.ingredient.capacity,
                i.ingredient.durability,
                i.ingredient.flavor,
                i.ingredient.texture,
                i.ingredient.calories
            );
            prop.multiply(i.amount);
            cookie.add(prop);
        }

        return cookie
    }

    toString() {
        const str = `Recipe: ${ this.ingredients.map(el => "\n - " + el.amount + " x " + el.ingredient.name).join('') }`
        return str
    }
}

const ingredients = new Map()

const createRecipe = (list, print = false) => {
    
    let recipe = new Recipe()

    for (let element of list) {
        recipe.addIngredient(ingredients.get(element[0]), element[1])
    }

    if (print)
        console.log(recipe.toString())

    return recipe
}

const createCookie = (list, print = false) => {
    return createRecipe(list).makeCookie()
}

const processedInput = input.split('\n')
    .filter(line => line.trim() !== '')
    .map((line) => {
        line = line.split(': ')
        const name = line[0].trim()
        const props = line[1].split(', ')

        ingredients.set(
            name, new Ingredient(
                name,
                parseInt(props[0].split(' ')[1]),
                parseInt(props[1].split(' ')[1]),
                parseInt(props[2].split(' ')[1]),
                parseInt(props[3].split(' ')[1]),
                parseInt(props[4].split(' ')[1])
            )
        )
    })

/**
 * Generates all possible combinations of ingredient-amount list
 * @param {number} n - ingredient amount
 * @param {number} total - total score
 * @returns {number[][]}
 */
function generateCombinations(n, total) {
    const results = [];
    function helper(arr, left, idx) {
        if (idx === n - 1) {
            results.push([...arr, left]);
            return;
        }
        for (let i = 0; i <= left; i++) {
            helper([...arr, i], left - i, idx + 1);
        }
    }
    helper([], total, 0);
    return results;
}

const ingredientNames = Array.from(ingredients.keys());
const allCombinations = generateCombinations(ingredientNames.length, ingredientsAmount);

let maxScore = 0;
let recipe = null
let cookie = null

for (const combo of allCombinations) {
    const _recipeList = ingredientNames.map((name, idx) => [name, combo[idx]]);
    const _recipe = createRecipe(_recipeList)
    const _cookie = createCookie(_recipeList)
    const score = _cookie.multiplyProps()
    if (score > maxScore && _cookie.calories == 500) {
        maxScore = score;
        recipe = _recipe
        cookie = _cookie;
    }
}


// Results

console.log('Best combination:\n')
console.log(recipe.toString(), '\n')
console.log(cookie.toString())
console.log('\nTotal value:', cookie.multiplyProps())
