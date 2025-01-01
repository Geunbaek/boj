function solution(ineq, eq, n, m) {
    if (ineq === "<" && n > m) {
        return 0
    }
    
    if (ineq === ">" && n < m) {
        return 0
    }

    
    return 1;
}