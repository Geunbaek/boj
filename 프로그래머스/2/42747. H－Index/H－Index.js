function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i ++) {
        const citation = citations[i];
        const hIndex = Math.min(i + 1, citation);
        answer = Math.max(answer, hIndex);
    }
    return answer;
}