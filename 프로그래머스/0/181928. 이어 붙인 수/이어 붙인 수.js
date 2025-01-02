function solution(num_list) {
    
    
    return num_list.reduce((acc, cur, index) => {
        const [odd, even] = acc;

        if (cur % 2 === 0) {
            return [odd, Number("" + even + cur)];
        } else {
            return [Number("" + odd + cur), even]
        }
    }, [0, 0]).reduce((acc, cur) => acc + cur, 0)
}