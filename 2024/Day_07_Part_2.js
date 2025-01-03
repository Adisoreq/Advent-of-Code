// CONST

const input = 
`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const rows = input.split('\n');

const equations = [];

var sum = 0;

// CLASSES

class TernaryArray {
  constructor(size) {
    this.array = Array(size).fill(0);
  }

  next() {
    let carry = 1;

    for (let i = 0; i < this.array.length; i++) {
      this.array[i] += carry;
      if (this.array[i] === 3) {
        this.array[i] = 0;
        carry = 1;
      } else {
        carry = 0;
        break;
      }
    }
  }

  display() {
    console.log(this.array);
  }
}

// FUNC

function checkEquation(equation) {
    const result = equation.result; // Expected result
    const coeff = equation.coefficients; // Coefficients
    const operationCount = 3 ** (coeff.length - 1);
    
    var operators = new TernaryArray(coeff.length - 1);
    
    for (let i = 0; i < operationCount; i++) {
        let res = coeff[0];
        
        for (let j = 0; j < coeff.length - 1; j++) {
            if (operators.array[j] === 0) { 
                res += coeff[j + 1]; // +
            } else if (operators.array[j] === 1) {
                res *= coeff[j + 1]; // *
            } else {
                res = Number(String(res) + String(coeff[j + 1])); // ||
            }
        }

        if (res === result) {
            let out = result + ' = ' + coeff[0];
            for (let j = 0; j < coeff.length - 1; j++) {
                if (operators.array[j] === 0) {
                    out += ' + ' + coeff[j + 1];
                } else if (operators.array[j] === 1) {
                    out += ' * ' + coeff[j + 1];
                } else {
                    out += ' || ' + coeff[j + 1];
                }
            }
            console.log(out);
            sum += result;
            return true;
        }
        operators.next();
    }
    console.log("-");
    return false;
}

// EXEC

for (let row of rows) {
    let r = row.split(':');
    let eq = { result: Number(r[0]), coefficients: r[1].trim().split(' ').map(Number) };
    equations.push(eq);
}

//console.log(equations);

for (let eq of equations) {
    checkEquation(eq);
}

console.log('\nSum:', sum);
