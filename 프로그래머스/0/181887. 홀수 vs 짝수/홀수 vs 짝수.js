function solution(num_list) {
    return Math.max(...num_list.reduce((acc, cur, i) => {
        const [even, odd] = acc;
        
        if ((i + 1) % 2 === 0) {
            return [even + cur, odd];
        } else {
            return [even, odd + cur]
        }
    }, [0, 0]))
}