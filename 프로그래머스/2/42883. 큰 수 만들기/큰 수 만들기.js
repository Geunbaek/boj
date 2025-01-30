
function solution(number, k) {
    const stack = [];
    
    for(let i = 0; i < number.length; i ++) {
        const char = number[i];
        
        while (stack.length > 0 && k > 0 && Number(stack.at(-1)) < Number(char)) {
            stack.pop();
            k -= 1;
        }
        
        stack.push(char);
    }
    
    while (k > 0) {
        stack.pop();
        k -= 1;
    }
    return stack.join("");
}