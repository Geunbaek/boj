function solution(arr, queries) {
    const answer = [...arr];
    
    queries.forEach(([s, e, k]) => {
        for(let i = s; i <= e; i ++) {
            if (i % k === 0) {
                answer[i] += 1;
            }
        }
    })
    return answer;
}