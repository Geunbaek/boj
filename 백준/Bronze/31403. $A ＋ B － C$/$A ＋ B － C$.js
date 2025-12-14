const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b, c] = input.trim().toString().split("\n");
console.log(parseInt(a) + parseInt(b) - parseInt(c));
console.log(a + b - c)