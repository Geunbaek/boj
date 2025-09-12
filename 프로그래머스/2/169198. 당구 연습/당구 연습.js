function calculateDistTop(n, m, x1, y1, x2, y2) {
    if (x1 === x2 && y1 < y2) return Infinity;
    
    const w = Math.abs(x2 - x1);
    const h = 2 * n - y1 - y2;
    
    return w ** 2 + h ** 2;
}

function calculateDistBottom(n, m, x1, y1, x2, y2) {
    if (x1 === x2 && y2 < y1) return Infinity;
    
    const w = Math.abs(x2 - x1);
    const h = y1 + y2;
    
    return w ** 2 + h ** 2;
}

function calculateDistLeft(n, m, x1, y1, x2, y2) {
    if (y1 === y2 && x2 < x1) return Infinity;
    
    const w = x1 + x2;
    const h = Math.abs(y2 - y1);
    
    return w ** 2 + h ** 2;
}

function calculateDistRight(n, m, x1, y1, x2, y2) {
    if (y1 === y2 && x1 < x2) return Infinity;
    
    const w = 2 * m - x1 - x2
    const h = Math.abs(y2 - y1);
    
    return w ** 2 + h ** 2;
}

function solution(m, n, startX, startY, balls) {
    return balls.map(([bx, by]) => Math.min(
        calculateDistTop(n, m, startX, startY, bx, by),
        calculateDistBottom(n, m, startX, startY, bx, by),
        calculateDistLeft(n, m, startX, startY, bx, by),
        calculateDistRight(n, m, startX, startY, bx, by)
    ))
}