function solution(my_string) {
    const n = my_string.length;
    return Array.from({length: n}, (_, index) => my_string.slice(index)).sort();
}