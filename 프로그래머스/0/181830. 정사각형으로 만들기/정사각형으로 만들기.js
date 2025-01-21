function extend(arr) {
    return 
}

function solution(arr) {
    const r = arr.length;
    const c = arr[0].length;
    
    if (r === c) return arr;
    if (r > c) {
        for (let y = 0; y < r; y ++) {
            arr[y].push(...Array.from({length: r - c}, () => 0))
        }
        return arr
    }
    arr.push(...Array.from({length: c - r}, () => Array.from({length: c}, () => 0)))
    return arr
}