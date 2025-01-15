function solution(strArr) {
    const counter = strArr.reduce((acc, cur) => {
        const length = cur.length;
        if (length in acc) {
            return {...acc, [length]: acc[length] + 1};
        }  
        return {...acc, [length] : 1};
    }, {})
    
    const maxCount = Math.max(...Object.values(counter));

    
    return maxCount;
}