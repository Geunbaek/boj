

function solution(k, dungeons) {
    
    let answer = 0;
    const visited = Array.from({length: dungeons.length}, () => 0);
    
    const recur = (depth, k, count) => {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < dungeons.length; i ++) {
            if (visited[i] === 1) continue
            const [min, use] = dungeons[i];
            if (min <= k) {
                visited[i] = 1;
                recur(i, k - use, count + 1);
                visited[i] = 0;
            }
        }
    }
    
    for (let i = 0; i < dungeons.length; i++) {
        const [min, use] = dungeons[i];
        if (min <= k) {
            visited[i] = 1;
            recur(i, k - use, 1);
            visited[i] = 0;
        }
    }

    return answer;
}