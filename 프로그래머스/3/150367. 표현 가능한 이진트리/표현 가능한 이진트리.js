const fillZero = (bin) => {
    for (let i = 0;; i++) {
        if (2 ** i - 1 >= bin.length) {
            return bin.padStart(2 ** i - 1, "0")
        }
    }
}

const dfs = (maxDepth, depth, l, r, hasZero, num) => {
    if (depth >= maxDepth) {
        return true;
    }
    const mid = Math.floor((l + r) / 2);
    
    if (hasZero && num[mid] === "1") return false;
    
    return dfs(maxDepth, depth + 1, l, mid - 1, hasZero || num[mid] === "0", num) && dfs(maxDepth, depth + 1, mid + 1, r, hasZero || num[mid] === "0", num);
}

function solution(numbers) {
    return numbers
        .map((number) => fillZero(number.toString(2)))
        .map((bNum) => dfs(Math.log2(bNum.length + 1), 0, 0, bNum.length - 1, false, bNum) ? 1 : 0)
}