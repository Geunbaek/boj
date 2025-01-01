function solution(n) {
    const isEven = n % 2 === 0;
    return Array
        .from({ length: n }, (_, index) => index + 1)
        .reduce((acc, cur) => {
            if (isEven) {
                if (cur % 2 === 0) {
                    return acc + cur * cur
                }
                return acc
            } else {
                if (cur % 2 !== 0) {
                    return acc + cur
                }
                return acc
            }
        }, 0)
}