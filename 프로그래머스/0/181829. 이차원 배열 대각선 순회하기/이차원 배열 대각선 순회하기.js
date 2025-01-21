function solution(board, k) {
    const r = board.length;
    const c = board[0].length;
    
    let answer = 0;
    
    for (let y = 0; y < r; y ++) {
        for (let x = 0; x < c; x ++){
            if (x + y <= k) {
                answer += board[y][x];            
            }
        }
    }
    return answer;
}