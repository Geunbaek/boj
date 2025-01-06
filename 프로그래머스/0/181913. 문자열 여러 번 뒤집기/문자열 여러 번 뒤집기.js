const reverse = (arr, s, e) => {
    const temp = arr.slice(s, e + 1).reverse();
    
    arr.splice(s, e - s + 1, ...temp);
}

function solution(my_string, queries) {
    const string = Array.from(my_string);
    queries.forEach(([s, e]) => reverse(string, s, e))
    return string.join("")
}