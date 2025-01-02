function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur , 0)
}

function mul(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1)
}


function solution(num_list) {
    return  mul(num_list) < (sum(num_list) * sum(num_list)) ? 1 : 0
}