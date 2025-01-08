function solution(my_string, m, c) {
    return [...my_string]
        .map((char, index) => index % m === c - 1 ? char : "")
        .filter(char => char)
        .join("");
}