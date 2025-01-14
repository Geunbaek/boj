
function solution(myStr) {
    const answer = myStr
        .split("a")
        .map((str) => str.split('b'))
        .flat()
        .map(str => str.split('c'))
        .flat()
        .filter(Boolean);
    
    if (answer.length === 0) {
        answer.push("EMPTY");
    }
    return answer
}