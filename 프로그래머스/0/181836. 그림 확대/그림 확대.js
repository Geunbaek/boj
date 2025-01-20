const arrayRepeat = (array, depth) => {
    const ret = []
    
    for (let i = 0; i <= depth; i ++){
        ret.push(array.slice())
    }
    
    return ret
}

function solution(picture, k) {
    
    return picture
        .map(line => 
             [...line]
             .map(pixel => pixel.repeat(k))
             .join("")
            ).map(line => arrayRepeat(line, k - 1)).flat()
}