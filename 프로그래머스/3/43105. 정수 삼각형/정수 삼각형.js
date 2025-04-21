function solution(triangle) {
    const row = triangle.length;
    
    for (let y = 1; y < row; y ++) {
        const col = triangle[y].length;
        
        for (let x = 0; x < col; x++) {
            if (x === 0) {
                triangle[y][x] += triangle[y - 1][x];
            } else if (x === col - 1) {
                triangle[y][x] += triangle[y - 1][x - 1];
            } else {
                triangle[y][x] += Math.max(triangle[y - 1][x - 1], triangle[y - 1][x]);
            }
        }
    }
    return Math.max(...triangle[row - 1]);
}