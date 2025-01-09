function solution(my_string, indices) {
    return [...my_string]
        .filter((char, index) => !indices.includes(index))
        .join("");
}