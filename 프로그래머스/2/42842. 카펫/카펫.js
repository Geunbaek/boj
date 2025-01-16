function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let i = 2; i <= total; i ++) {
        if (total % i !== 0) {
            continue;
        }
        
        const w = Math.max(total / i, i);
        const h = Math.min(total / i, i);
        
        if ((w - 2) * (h - 2) === yellow) {
            return [w, h];
        }
    }
    return -1
}
