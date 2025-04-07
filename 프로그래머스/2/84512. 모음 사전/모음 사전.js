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

const recurSolution = (word) => {
    const words = {};
    recur(0, "", words)
    return words[word];
}


const forSolution = (word) => {
    const words = {};
    let SIZE = 0;

    for (let i = 0; i < ALPHA.length; i++) {
        let w1 = ALPHA[i];
        words[w1] = SIZE + 1;
        SIZE += 1;
        
        for (let j = 0; j < ALPHA.length; j++) {
            let w2 = w1 + ALPHA[j];
            words[w2] = SIZE + 1;
            SIZE += 1;
            
            for (let k = 0; k < ALPHA.length; k++) {
                let w3 = w2 + ALPHA[k];
                words[w3] = SIZE + 1;
                SIZE += 1;
                
                for (let l = 0; l < ALPHA.length; l++) {
                    let w4 = w3 + ALPHA[l];
                    words[w4] = SIZE + 1;
                    SIZE += 1;
                    
                    for (let m = 0; m < ALPHA.length; m++) {
                        let w5 = w4 + ALPHA[m];
                        words[w5] = SIZE + 1;
                        SIZE += 1;
                    }
                }
            }
        }
    }

    return words[word];
}

function solution(word) {
    // return recurSolution(word) 
    return forSolution(word)
}