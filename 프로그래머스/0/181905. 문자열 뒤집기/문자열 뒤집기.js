function solution(my_string, s, e) {
    const ret = [...my_string]
    const temp = ret.slice(s, e + 1).reverse();
    ret.splice(s, e - s + 1, ...temp);
    return ret.join("");
}