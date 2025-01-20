function solution(myString) {
    return [...myString]
        .map(char => char.charCodeAt(0) < 'l'.charCodeAt(0) ? 'l' : char)
        .join('')
}