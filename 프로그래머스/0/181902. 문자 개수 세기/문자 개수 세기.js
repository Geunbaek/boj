function solution(my_string) {
    const ret = Array.from({length: 52}, () => 0);
    
    const lowerAlphaCache = Array.from(
        {length: 26},
        (_, index) => String.fromCharCode('a'.charCodeAt(0) + index)
    ).reduce((acc, cur, i) => ({...acc, [cur]: i + 26}), {});
    
    const upperAlphaCache = Array.from(
        {length: 26}, 
        (_, index) => String.fromCharCode('A'.charCodeAt(0) + index)
    ).reduce((acc, cur, i) => ({...acc, [cur]: i}), {});
    
    [...my_string]
        .forEach((char) => {
            if (char.toLowerCase() === char) {
                ret[lowerAlphaCache[char]] += 1 
            } else {
                ret[upperAlphaCache[char]] += 1 
            }
        })
    return ret
}