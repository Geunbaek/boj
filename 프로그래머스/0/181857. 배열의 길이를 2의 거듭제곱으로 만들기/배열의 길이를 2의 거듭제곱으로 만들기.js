function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function solution(arr) {
    const maxLength = Math.pow(2, Math.ceil(getBaseLog(2, arr.length)));
    
    while (arr.length < maxLength) {
        arr.push(0);
    }
    return arr;
}