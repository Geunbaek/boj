function solution(number) {
    let answer = 0
    
    Array.from(number).forEach(num => answer += Number(num));
    return answer % 9
}