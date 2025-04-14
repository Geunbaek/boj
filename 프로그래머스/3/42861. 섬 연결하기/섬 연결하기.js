const find = (p, x) => {
    if (p[x] !== x) {
        p[x] = find(p, p[x])
    }
    return p[x]
}

const union = (p, a, b) => {
    const ap = find(p, a)
    const bp = find(p, b)
    p[ap] = bp
}

function solution(n, costs) {
    const p = Array.from({length: n}, (_, index) => index);
    
    let answer = 0;
    costs
        .sort((a, b) => a[2] - b[2])
        .forEach(([u, v, c]) => {
            if (find(p, u) !== find(p, v)) {
                union(p, u, v)
                answer += c
            }
        })
    return answer
}