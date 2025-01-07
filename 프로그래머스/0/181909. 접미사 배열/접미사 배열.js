function solution(my_string) {
    return Array.from(
        {length: my_string.length}, 
        (_, index) => my_string.slice(index)
    )
    .sort();
}