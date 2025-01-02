function solution(a, d, included) {
    const nums = included.map((inc, index) => inc ? a + (d * index) : 0);
    return nums.reduce((acc, cur) => acc + cur, 0)
}