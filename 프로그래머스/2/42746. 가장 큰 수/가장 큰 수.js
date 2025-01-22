const compare = (a, b) => {
    return `${b}${a}` - `${a}${b}`
}

function solution(numbers) {
    return String(BigInt(numbers.sort(compare).join("")));
}