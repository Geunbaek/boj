const bfs = (board, x, y, target, visited) => {
    const [r, c] = [board.length, board[0].length]
    
    const q = [{x, y, pos: [0, 0]}];
    visited.add(`${x},${y}`)
    
    const path = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    while (q.length !== 0) {
        const {x, y, pos} = q.shift();
        path.push(pos.join(","));

        for (let i = 0; i < 4; i ++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (!(0 <= nx && nx < c && 0 <= ny && ny < r)) {
                continue;
            }

            if (board[ny][nx] != target) continue;
            const mask = `${nx},${ny}`;
            if (visited.has(mask)) continue;
            visited.add(mask);
            q.push({x:nx, y:ny, pos: [pos[0] + dx[i], pos[1] + dy[i]]});
        }
    }
    return path.join('|')
}

const rotate = (board) => {
    const [r, c] = [board.length, board[0].length]
    
    const newBoard = [];
    
    for (let x = 0; x < c; x ++) {
        newBoard.push([]);
        for (let y = r - 1; y >= 0; y --) {
            newBoard[x].push(board[y][x]);
        }
    }
    return newBoard;
}

const removeBlock = (board, x, y, path) => {
    for (const pos of path.split("|")) {
        const [dx, dy] = pos.split(",").map(Number);
        const nx = x + dx;
        const ny = y + dy;
        board[ny][nx] = 0;
    } 
}


function solution(game_board, table) {
    const [r, c] = [game_board.length, game_board[0].length]
    const emptyAreas = {}
    
    const visited = new Set();
    for (let y = 0; y < r; y ++) {
        for (let x = 0; x < c; x ++) {
            if (game_board[y][x] == 1) continue;
            if (visited.has(`${x},${y}`)) continue;
            const path = bfs(game_board, x, y, 0, visited);
            if (!(path in emptyAreas)) {
                emptyAreas[path] = 0;
            }
            emptyAreas[path] += 1;
        }
    }
    let answer = 0;
    let copyTable = table;
    for (let i = 0; i < 4; i ++) {
        if (i !== 0) {
            copyTable = rotate(copyTable);
        }
        const visited = new Set();
        for (let y = 0; y < r; y ++) {
            for (let x = 0; x < c; x ++) {
                if (copyTable[y][x] === 0) continue; 
                if (visited.has(`${x},${y}`)) continue;
                
                const path = bfs(copyTable, x, y, 1, visited);
                
                if (path in emptyAreas) {
                    answer += path.split("|").length;
                    emptyAreas[path] -= 1;
                    if (emptyAreas[path] === 0) {
                        delete emptyAreas[path];
                    }
                    removeBlock(copyTable, x, y, path);
                }
            }
        }
        
    }
    
    return answer;
}