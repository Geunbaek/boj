const compare = (a, b) => {
    return b.toString().repeat(6).slice(0, 6) - a.toString().repeat(6).slice(0, 6)
    // return `${b}${a}` - `${a}${b}`;
}

function solution(numbers) {
    return String(BigInt(numbers.sort(compare).join("")));
}