function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        let count = 0;
        while (progresses.length > 0 && progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count += 1;
        }
        
        if (count > 0) {
            answer.push(count);
        }
    }
    return answer;
}