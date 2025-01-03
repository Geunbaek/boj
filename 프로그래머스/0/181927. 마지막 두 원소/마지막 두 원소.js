function solution(num_list) {
    const answer = [...num_list]
    
    const last1 = num_list.at(-1)
    const last2 = num_list.at(-2)
    
    if (last1 > last2) {
        answer.push(last1 - last2)
    } else {
        answer.push(last1 * 2)
    }
    return answer
}