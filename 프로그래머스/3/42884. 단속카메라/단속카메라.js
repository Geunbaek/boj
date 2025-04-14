function solution(routes) {
    routes.sort((a, b) => a[1] - b[1] || a[0] - b[0])
    
    let camera = -30_001;
    let count = 0;
    
    for (const [start, end] of routes) {
        if (camera < start) {
            camera = end
            count += 1
        }        
    } 
    
    return count
}