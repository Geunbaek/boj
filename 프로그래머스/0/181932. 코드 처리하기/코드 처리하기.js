
function solution(code) {
    let mode = 0;
    let ret = "";
    
    const n = code.length;
    
    for (let i = 0; i < n; i ++) {
        const char = code[i];
        if (char === "1") {
            mode = mode === 1 ? 0 : 1
            continue
        }
        
        if (mode === 0 && i % 2 === 0) {
            ret += char
            continue
        } 
        
        if (mode === 1 && i % 2 !== 0) {
            ret += char
            continue
        }
    }
    
    if (!ret) {
        return "EMPTY"
    }
    return ret
}