const recur = (n, depth, numbers, path, visited, set) => {
    if (depth >= n + 1) {
        return
    }
    
    if (path) {
        set.add(Number(path));    
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i] === 1) {
            continue;
        }
        
        visited[i] = 1;
        recur(n, depth + 1, numbers, path + numbers[i], visited, set)
        visited[i] = 0;
    }
    
}

function solution(numbers) {
    const primes = new Array(10_000_000).fill(1);
    primes[0] = 0;
    primes[1] = 0;
    
    for (let i = 2; i < 10_000_000; i ++) {
        if (primes[i] === 1) {
            for (let j = i * i; j < 10_000_000; j += i) {
                primes[j] = 0;
            }
        }
    }
    const n = numbers.length;
    
    const set = new Set();
    const visited = new Array(n).fill(0);
    recur(n, 0, numbers, "", visited, set);
    return [...set].filter(num => primes[num] === 1).length;
    
}