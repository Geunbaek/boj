const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = -1;
const heap = [];

rl.on("line", (input) => {
  if (n === -1) {
    n = Number(input);
    return;
  } else {
    const temp = input.split(" ");
    for (let i = 0; i < temp.length; i++) {
      heap.push(Number(temp[i]));
    }
    heap.sort((a, b) => b - a).splice(n, heap.length - n);
  }
}).on("close", () => {
  console.log(heap[n - 1]);
});
