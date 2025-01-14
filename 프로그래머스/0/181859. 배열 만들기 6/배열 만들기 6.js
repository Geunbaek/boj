function solution(arr) {
    const n = arr.length;
    const stk = [];
    
    for(let i = 0; i < n; i ++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            continue;
        }
        
        if (stk.at(-1) === arr[i]) {
            stk.pop();
            continue;
        }
        
        stk.push(arr[i])
    }
    
    if (stk.length === 0) {
        stk.push(-1)
    }
    return stk;
}