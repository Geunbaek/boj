const MOD = 1_000_000_007;

function solution(m, n, puddles) {
    const dp = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));
    const board = Array.from({length: n}, () => new Array(m).fill(0));
    
    for (const [x, y] of puddles) {
        board[y - 1][x - 1] = 1;
    }
    
    dp[0][0] = 1
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (x === 1 && y === 1) {
                dp[y][x] = 1;
                continue;
            }
            
            if (board[y - 1][x - 1] === 1) {
                continue;
            }
            
            dp[y][x] = (dp[y - 1][x] + dp[y][x - 1]) % MOD
        }
    }
    
    return dp[n][m] 
}