function solution(tickets) {
    const dfs = (now) => {
        const nextPath = graph.get(now) || [];
        while (nextPath.length !== 0) {
            dfs(nextPath.shift());
        }
        answer.push(now);
    }
    
    
    const graph = new Map();
    
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    
    for (let i = 0; i < tickets.length; i++) {
        const [a, b] = tickets[i];
        const path = graph.get(a) || [];
        path.push(b);
        graph.set(a, path);
    }
    
    const answer = [];
    dfs("ICN")
    return answer.reverse();
}