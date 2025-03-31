/*
h-index : a 번 이상 인용된 논문이 b 편 이상일 때 a와 b의 최솟값 중 최대값
*/


function solution(citations) {
    let maxHIndex = 0;
    citations.sort((a, b) => a - b);
    
    const n = citations.length;
    for (let i = 0; i < n; i ++) {
        const citation = citations[i];
        const hIndex = Math.min(citation, n - i);
        maxHIndex = Math.max(maxHIndex, hIndex);
    }
    
    return maxHIndex;
}