function solution(my_string) {
    const ret = Array.from({length: 52}, () => 0);
        
//     const lowerAlphaCache = Array.from(
//         {length: 26},
//         (_, index) => String.fromCharCode('a'.charCodeAt(0) + index)
//     ).reduce((acc, cur, i) => ({...acc, [cur]: i + 26}), {});
    
//     const upperAlphaCache = Array.from(
//         {length: 26}, 
//         (_, index) => String.fromCharCode('A'.charCodeAt(0) + index)
//     ).reduce((acc, cur, i) => ({...acc, [cur]: i}), {});
    
//     console.log(lowerAlphaCache, upperAlphaCache);
    
    [...my_string]
        .forEach((char) => {
            if (char.toLowerCase() === char) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
                ret[index] += 1 
            } else {
                const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
                ret[index] += 1 
            }
        })
    return ret
}