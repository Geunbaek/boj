function solution(s) {
    const nums = s.split(" ").sort((a, b) => Number(a) - Number(b));
    
    return `${nums.shift()} ${nums.pop()}`

}