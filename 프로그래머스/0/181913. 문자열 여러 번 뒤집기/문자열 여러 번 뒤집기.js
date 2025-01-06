const reverse = (arr, s, e) => {
    const temp = arr.slice(s, e + 1).reverse();
    
    for (let i = s; i <= e; i ++) {
        arr[i] = temp[i - s];
    }
}

function solution(my_string, queries) {
    const string = Array.from(my_string);
    queries.forEach(([s, e]) => reverse(string, s, e))
    return string.join("")
}