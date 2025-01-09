function solution(start_num, end_num) {
    const length = start_num - end_num + 1;
    return Array.from({length}, (_, index) => start_num - index);
}