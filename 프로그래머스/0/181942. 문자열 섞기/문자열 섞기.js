function solution(str1, str2) {
    const n = str1.length;
    
    return Array.from({length: n}, (_, i) => str1[i] + str2[i]).join('')
}