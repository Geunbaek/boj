const ALPHA = ['A', 'E', 'I', 'O', 'U']
let SIZE = 0;

const recur = (depth, path, words) => {
    if (depth > 5) {
        return
    }
    
    if (path) {
        words[path] = SIZE + 1;  
        SIZE += 1;
    }
    
    for (let i = 0; i < 5; i ++) {
        const char = ALPHA[i];
        recur(depth + 1, path + char, words);
    } 
    
}

function solution(word) {
    const words = {};
    recur(0, "", words)
    return words[word];
}