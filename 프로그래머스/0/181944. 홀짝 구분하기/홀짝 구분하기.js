const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [n] = input.map(Number)
    console.log(`${n} is ${n % 2 === 0 ? "even" : "odd"}`)
});