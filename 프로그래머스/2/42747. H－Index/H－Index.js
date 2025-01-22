function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i ++) {
        const citation = citations[i];
        if (i + 1 <= citation) {
            answer = i + 1;
        }else {
            break
        }
    }
    return answer;
}