const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calc = require('./module')

let input = []
rl.question("Enter a, b: ", (line) => {
    input = line.split(' ').map((el) => parseInt(el));
    rl.close();
})

rl.on("close", function() {
    let a = input[0];
    let b = input[1];
    console.log(calc.add(a, b));
    console.log(calc.sub(a, b));
    console.log(calc.mult(a, b));
    console.log(calc.div(a, b));
})
