function solution(start_num, end_num) {
    const n = end_num - start_num + 1;
    return Array.from({length: n}, (_, index) => start_num + index);
}