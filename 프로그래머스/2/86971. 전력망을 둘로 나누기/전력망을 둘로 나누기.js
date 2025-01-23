const find = (p, x) => {
    if (x != p[x]) {
        p[x] = find(p, p[x]);
    }

    return p[x];
}

const union = (p, a, b) => {
    const ap = find(p, a);
    const bp = find(p, b);
    p[ap] = bp;
}

function solution(n, wires) {
    let answer = n;
    
    for (let ban = 0; ban < wires.length; ban ++) {
        const p = Array.from({length: n + 1}, (_, i) => i);
        
        for (let i = 0; i < wires.length; i ++) {
            if (i === ban) continue;
            
            const [u, v] = wires[i];
            union(p, u, v);
        }
        
        const roots = {};
        for (let i = 1; i <= n; i ++) {
            const parent = find(p, i);
            if (parent in roots) {
                roots[parent] += 1;
            } else {
                roots[parent] = 1;
            }
        }
        const values = Object.values(roots);
        answer = Math.min(answer, Math.abs(values[0] - values[1]))
    }
    
    
    
    return answer;
}