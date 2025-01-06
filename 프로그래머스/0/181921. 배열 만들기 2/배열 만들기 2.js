function solution(l, r) {
    const answer = [];
    for (let i = l; i <= r; i ++) {
        
        const chars = new Set(String(i));
    
        if (chars.size === 1) {
            if (chars.has("0") || chars.has("5")) {
                answer.push(i);
            }
        }
        
        if (chars.size === 2) {
            if (chars.has("0") && chars.has("5")) {
                answer.push(i);
            }
        }
    
    }
    
    if (answer.length === 0) {
        answer.push(-1)
    }
    return answer;
}