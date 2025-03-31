/*
h-index : 발표한 논문 수, 인용횟수 둘 중 최소값
*/

function solution(citations) {
    citations.sort((a, b) => a - b);
    
    const n = citations.length;
    for (let i = 0; i < n; i ++) {
        const citation = citations[i];
        const restCite = n - i;
        
        if (citation >= restCite) {
            return restCite;
        }
    }
    
    return 0;
}