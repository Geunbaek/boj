function execQuery(arr, s, e, k) {
    let min = -1;
    for (let i = s; i <= e; i ++) {
        if (arr[i] > k) {
            if (min === -1 || min > arr[i]) {
                min = arr[i];
            }
        }
    }
    return min;
}

function solution(arr, queries) {
    return queries.map(query => {
        const [s, e, k] = query;
        const min = execQuery(arr, s, e, k);
        return min;
    })
}