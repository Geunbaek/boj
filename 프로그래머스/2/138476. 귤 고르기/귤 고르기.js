function solution(k, tangerine) {
    
    const counter = new Map();
    
    for (const t of tangerine) {
        counter.set(t, (counter.get(t) ?? 0) + 1)
    }
    
    let orange = 0;
    let count = 0
    
    
    for (const [key, value] of [...counter.entries()].sort((a, b) => b[1] - a[1])) {
        if (orange + value >= k) {
            return count + 1;
        }
        orange += value
        count += 1
    }
    return -1
}