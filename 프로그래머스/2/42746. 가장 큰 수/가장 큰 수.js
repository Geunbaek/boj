const compare = (a, b) => {
    return b.toString().repeat(4).slice(0, 4) - a.toString().repeat(4).slice(0, 4)
    // return `${b}${a}` - `${a}${b}`;
}

function solution(numbers) {
    return String(BigInt(numbers.sort(compare).join("")));
}