function solution(n) {
    return [...Array
            .from({length: n}, (_, i) => i + 1)
            .reduce((acc, cur) => {
                if (n % cur === 0) {
                    acc.add(cur);
                }
                return acc
            }, new Set())].reduce((acc, cur) => acc + cur, 0)
}