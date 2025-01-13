function solution(numbers) {
    const n = numbers.length;
    const sums = new Set();
    
    for(let i = 0; i < n; i ++) {
        for (let j = i + 1; j < n; j ++) {
            const num1 = numbers[i];
            const num2 = numbers[j];
            
            sums.add(num1 + num2);
        }
    }
    
    const answer = [...sums].sort((a, b) => a - b);
    return answer;
}