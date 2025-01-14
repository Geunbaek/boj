function solution(arr, flag) {
    const n = arr.length;
    
    const ret = [];
    
    for (let i = 0; i < n; i ++) {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j ++) {
                ret.push(arr[i])
            }
        } else {
              for (let j = 0; j < arr[i]; j ++) {
                ret.pop()
            }
        }
    }
    return ret;
}