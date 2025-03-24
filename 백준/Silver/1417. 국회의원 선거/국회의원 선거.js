const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const stdin = fs
  .readFileSync(inputPath)
  .toString()
  .split("\n")
  .map((line) => line.trim());

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const solution = () => {
  const n = Number(input());
  const arr = [];

  let target = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      target = Number(input());
      continue;
    }

    arr.push({ i: i + 1, count: Number(input()) });
  }

  if (arr.length === 0) {
    console.log(0);
  } else {
    let answer = 0;
    while (1) {
      arr.sort((a, b) => b.count - a.count);
      const [max] = arr;

      if (target <= max.count) {
        max.count -= 1;
        target += 1;
        answer += 1;
      } else {
        break;
      }
    }
    console.log(answer);
  }
};

solution();
