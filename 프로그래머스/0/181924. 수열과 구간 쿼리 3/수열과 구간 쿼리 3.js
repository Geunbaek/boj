function solution(arr, queries) {
    const answer = [...arr];
    
    queries.forEach((query) => {
        const [i, j] = query;
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    })
    return arr;
}