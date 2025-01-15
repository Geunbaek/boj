function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function solution(arr) {
    const maxLength = Math.pow(2, Math.ceil(getBaseLog(2, arr.length)));

    return arr.concat(Array.from({length: maxLength - arr.length}, () => 0 ));
}