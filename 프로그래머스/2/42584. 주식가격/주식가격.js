function solution(prices) {
    const stack = [];
    const answer = new Array(prices.length).fill(0);
    
    prices.forEach((price, index) => {
        while (stack.length !== 0 && stack.at(-1).p > price) {
            const {p, i} = stack.pop();
            answer[i] = index - i; 
        }
        
        stack.push({p:price, i: index})
    })
    
    while (stack.length !== 0) {
        const {p, i} = stack.pop();
        answer[i] = prices.length - 1 - i;
    }

  
    return answer;
}

/*
[]  answer [0, 0, 0, 0, 0]
[(1, 0)]  answer [0, 0, 0, 0, 0]
[(1, 0), (2, 1)]  answer [0, 0, 0, 0, 0]
[(1, 0), (2, 1), (3, 2)]  answer [0, 0, 0, 0, 0]
[(1, 0), (2, 1), (3, 2)] -> [(1, 0), (2, 1), (2, 3)]  answer [0, 0, 1, 0, 0]
[(1, 0), (2, 1), (2, 3), (3, 4)]  answer [0, 0, 1, 0, 0]
[(1, 0), (2, 1), (2, 3)]  answer [0, 0, 1, 0, 0]
[(1, 0), (2, 1)]  answer [0, 0, 1, 1, 0]
[(1, 0)]  answer [0, 3, 1, 1, 0]
[]  answer [4, 3, 1, 1, 0]
*/