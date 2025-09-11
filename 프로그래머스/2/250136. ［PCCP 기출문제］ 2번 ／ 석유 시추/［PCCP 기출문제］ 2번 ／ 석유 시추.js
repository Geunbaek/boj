const deque = () => {
    let head = 0;
    const q = [];
    
    const push = (el) => {
        q.push(el);
    }
    
    const popleft = () => {
        if (head === q.length) return null;
        return q[head++];
    }
    
    const isEmpty = () => {
        return head === q.length;
    }
    
    return {
        push,
        popleft,
        isEmpty
    }
}

function solution(land) {
    const bfs = (sx, sy) => {
        const q = deque();
        let size = 1
        q.push([sx, sy]);
        visited[sy][sx] = id;
        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];
        
        while (!q.isEmpty()) {
            const [x, y] = q.popleft();
            
            for (let i = 0; i < 4; i ++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (!(0 <= nx && nx < c && 0 <= ny && ny < r)) continue;
                
                if (visited[ny][nx]) continue;
                if (land[ny][nx] !== 1) continue;
                visited[ny][nx] = id;
                q.push([nx, ny]);
                size += 1;
            }
        }
        return size;
    }
    const [r, c] = [land.length, land[0].length];
    const visited = Array.from({length: r}, () => new Array(c).fill(0));
    const oilMap = {}
    
    let id = 1;
    for (let y = 0; y < r; y++) {
        for (let x = 0; x < c; x++) {
            if (visited[y][x] === 0 && land[y][x] === 1) {
                oilMap[id] = bfs(x, y); 
                id += 1;
            }
        }
    }
    
    let answer = 0;
    for (let x = 0; x < c; x++) {
        const visitedOil = new Set();
        for (let y = 0; y < r; y++) {
            if (!visited[y][x]) continue
            visitedOil.add(visited[y][x]);
        }
        const total = [...visitedOil].reduce((acc, oil) => acc + oilMap[oil], 0);
        answer = Math.max(answer, total);
    }
    return answer;
}