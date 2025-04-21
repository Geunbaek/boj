
const productSet = (set1, set2) => {
    if (!set1 && !set2) return new Set();
    if (!set1) return set2;
    if (!set2) return set1;
    const ret = new Set();
    for (const num1 of set1) {
        for (const num2 of set2) {
            ret.add(num1 - num2);
            ret.add(num1 + num2);
            ret.add(num1 * num2);
            ret.add(Math.floor(num1 / num2));
        }
    }
    return ret;
}

const solution = (N, number) => {
    const dp = [];
    
    for (let i = 1; i <= 8; i ++) {
        let nums = new Set();
        nums.add(parseInt(`${N}`.repeat(i)));
        
        for (let j = 0; j < i; j++) {
            const now = j;
            const next = dp.length - j - 1;
            nums = new Set([...nums, ...productSet(dp[now], dp[next])])
        }
        if (nums.has(number)) {
            return i;
        }
        dp.push(nums);
    }
    return -1;
}