const compare = (a, b) => {
    return `${b}${a}` - `${a}${b}`;
    // return b.toString().repeat(6).slice(6) - a.toString().repeat(6).slice(6);
}

function solution(numbers) {
    return String(BigInt(numbers.sort(compare).join("")));
}