function solution(routes) {
    routes.sort((a, b) => a[1] - b[1] || a[0] - b[0])
    
    const stack = []
    for (const [start, end] of routes) {
        if (stack.length === 0) {
            stack.push(end)
            continue
        }
        
        const lastEnd = stack[stack.length - 1]
        
        if (lastEnd < start) {
            stack.push(end)
        }        
    } 
    
    return stack.length
}