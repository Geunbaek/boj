/*
발표한 논문, 피인용횟수 둘 중 최소값이 h-index 입니다.
*/


function solution(citations) {
    let maxHIndex = 0;
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations.length; i ++) {
        const citation = citations[i];
        const hIndex = Math.min(citation, i + 1)
   
        maxHIndex = Math.max(maxHIndex, hIndex);
    }
    
    return maxHIndex;
}