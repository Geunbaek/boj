function solution(arr) {
    let left = -1;
    let right = arr.length;
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === 2) {
            if (left === -1) {
                left = i;
                right = i;
            } else {
                right = i;
            }
        }
    }
    
    if (left === -1) {
        return [-1]
    }
    return arr.slice(left, right + 1);
}