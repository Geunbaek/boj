function solution(tickets) {
    const graph = new Map();
    
    for (let i = 0; i < tickets.length; i++) {
        const [a, b] = tickets[i];
        const path = graph.get(a) || [];
        path.push([b, i]);
        graph.set(a, path);
    }
    
    for (const [key, value] of graph) {
        value.sort((a, b) => a[0].localeCompare(b[0]))
    }
    const q = [
        { path: ["ICN"], visited: new Set(), now: "ICN" }
    ];
    
    while (q.length !== 0) {
        const {path, visited, now} = q.shift();
        
        if (visited.size === tickets.length) {
            return path;
        }
        
        for (const [next, i] of graph.get(now) || []) {
            if (visited.has(i)) continue;
            q.push({
                path: path.concat(next),
                visited: new Set([...visited].concat(i)),
                now: next
            })
        }
    }
    return answer;
}