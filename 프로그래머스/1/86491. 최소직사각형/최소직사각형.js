function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length;i ++) {
        const [width, height] = sizes[i];
        const max = Math.max(width, height);
        const min = Math.min(width, height);
        
        maxWidth = Math.max(maxWidth, max);
        maxHeight = Math.max(maxHeight, min);
    }
    return maxWidth * maxHeight;
}