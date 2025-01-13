
function solution(myString, pat) {
    let answer = 0;
    for (let i = 0; i < myString.length - pat.length + 1; i ++) {
        const temp = myString.slice(i, i + pat.length);
        if (pat === temp) {
            answer += 1;
        }
    }
    return answer;
}