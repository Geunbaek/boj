function solution(my_string, index_list) {
    const n = my_string.length;
    
    const answer = Array.from({ length: n }, () => "");
    
    index_list.forEach((idx, i) => answer[i] = my_string[idx]);
    
    return answer.join("")
}