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
      answer[i] = prices.length - i - 1;
  }

  
    return answer;
}