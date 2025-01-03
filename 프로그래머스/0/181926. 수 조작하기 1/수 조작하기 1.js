function solution(n, control) {
    let answer = n;
    [...control].forEach((char) => {
        switch(char) {
            case "w":
                answer += 1;
                return;
            case "s":
                answer -= 1;
                return;
            case "d":
                answer += 10;
                return;
            case "a":
                answer -= 10;
                return;
        }
    })
    return answer;
}