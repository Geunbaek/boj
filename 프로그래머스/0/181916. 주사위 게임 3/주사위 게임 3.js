const count = (arr) => {
    return arr.reduce((acc, cur) => {
        if (cur in acc) {
            return {...acc, [cur]: acc[cur] + 1};
        } else {
            return {...acc, [cur]: 1} 
        }
    }, {})
}

function solution(a, b, c, d) {
    const nums = count([a, b, c, d])
        
    const keys = Object.keys(nums)
    const values = Object.values(nums)
    
    if (keys.length === 1) {
        return 1111 * a;
    }
    
    if (keys.length === 2) {
        console.log(values)

        if (new Set(values).size === 1) {
            const [p, q] = keys.map(Number);
            return (p + q) * Math.abs(p - q);
        } else {
            let [p, q] = keys.map(Number);
        
            if (nums[q] > nums[p]) {
                [p, q] = [q, p]
            }
        
            return Math.pow(((10 * p) + q), 2);
        }
    }
    
    if (keys.length === 3) {
        keys.sort((a, b) => nums[b] - nums[a])
        let [p, q, r] = keys;
        
        return q * r;
    }
    
    return Math.min(a, b, c, d);
}