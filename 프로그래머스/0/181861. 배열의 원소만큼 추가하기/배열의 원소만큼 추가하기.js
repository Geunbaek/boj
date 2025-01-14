function solution(arr) {
    return arr.map(num => Array.from({length:num}, () => num)).flat();
}