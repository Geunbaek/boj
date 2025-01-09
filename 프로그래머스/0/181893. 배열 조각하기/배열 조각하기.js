function solution(arr, query) {
    let answer = arr;
    
    query.forEach((q, index) => {
        if (index % 2 === 0) {
            answer = answer.slice(0, q + 1);
        } else {
            answer = answer.slice(q, answer.length);
        }
    })
    return answer;
}