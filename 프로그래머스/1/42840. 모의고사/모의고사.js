function solution(answers) {
    const answer1 = [1, 2, 3, 4, 5];
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = answers.reduce((acc, answer, i) => {
        const a1 = answer1[i % answer1.length];
        const a2 = answer2[i % answer2.length];
        const a3 = answer3[i % answer3.length];
        const [prev1, prev2, prev3] = acc;
        return [
            prev1 + (a1 === answer ? 1 : 0),
            prev2 + (a2 === answer ? 1 : 0),
            prev3 + (a3 === answer ? 1 : 0),
        ]
    }, [0, 0, 0])    
    
    const max = Math.max(...scores);
    const rank = scores.map((score, index) => ({
        score,
        index
    })).filter((s) => s.score === max).map((s) => s.index + 1)
    
    
    return rank;
}