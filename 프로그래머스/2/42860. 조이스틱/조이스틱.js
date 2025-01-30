

function solution(name) {
    const n = name.length;
    let answer = Infinity;
    const visited = new Array(n).fill(0);
    const diff = [...name].filter(char => char !== "A").length;
    
    const recur = (depth, now, count, diffCount) => {
        if (diffCount === diff || depth > n) {
            if (diffCount === diff) {
                answer = Math.min(answer, now !== 0 ? count - 1 : count);        
            }
            return;
        }
        const front = name[now].charCodeAt(0) - "A".charCodeAt(0);
        const back = "Z".charCodeAt(0) - name[now].charCodeAt(0) + 1;
        const minDiff = Math.min(front, back);
        
        if (visited[now] === 0) {
            visited[now] = 1;
            recur(depth + 1, 
                  now === n - 1 ? 0 : now + 1, 
                  count + minDiff + 1,
                  minDiff === 0 ? diffCount : diffCount + 1,
                );
            visited[now] = 0;
            
            visited[now] = 1;
            recur(depth + 1, 
                  now === 0 ? n - 1 : now - 1, 
                  count + minDiff + 1,
                  minDiff === 0 ? diffCount : diffCount + 1,
                 );
            visited[now] = 0;
        } else {
            recur(depth + 1, 
                  now === n - 1 ? 0 : now + 1, 
                  count + 1,
                  diffCount
                 );
            recur(depth + 1, 
                  now === 0 ? n - 1 : now - 1, 
                  count + 1,
                  diffCount
                 );
        }
               
    }
    
    recur(0, 0, 0, 0);
    return answer;
}