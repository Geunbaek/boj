function solution(n) {
    const board = Array.from({length: n}, () => Array.from({length:n}, () => 0))
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    
    const q = [{x: 0, y: 0, d: 0, isChanged: false}]
    board[0][0] = 1;
    
    while (q.length !== 0) {
        const {x, y, d, isChanged} = q.shift();
        
        
        const nx = x + dx[d];
        const ny = y + dy[d];
        
        if (!(0 <= nx && nx < n && 0 <= ny && ny < n)) {
            if (isChanged) continue;
            q.push({x, y, d: (d + 1) % 4, isChanged: true});
            continue;
        }
        
        if (board[ny][nx] !== 0) {
            if (isChanged) continue;
            q.push({x, y, d: (d + 1) % 4, isChanged: true});
            continue;
        }
        
        board[ny][nx] = board[y][x] + 1;
        q.push({x: nx, y: ny, d, isChange: false})
    }
    return board;
}