function solution(numLog) {
    const answer = numLog.map((num, index) => {
        if (index === 0) {
            return null;
        }
        
        const prev = numLog[index - 1];
        
        switch (num - prev) {
            case 1:
                return "w";
            case -1:
                return "s";
            case 10:
                return "d";
            case -10:
                return "a";
        }
    })

    return answer.filter(num => num !== null).join("")
}