function solution(routes) {
    routes.sort((a, b) => b[0] - a[0])
    
    const stack = []
    let answer = 0
    console.log(routes)
    for (const [u, v] of routes) {
        if (stack.length === 0) {
            stack.push([u, v])
            continue
        }
        
        const [lu, lv] = stack.at(-1)
        
        if (lu > v) {
            stack.push([u, v])
        }        
    } 
    
    return stack.length
}