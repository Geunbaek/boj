function solution(clothes) {
    // 서로 다른 옷의 조합
    // 얼굴 개수 * 상의 개수 * 하의 개수 * 겉옷 개수 + 모든 옷의 개수
    
    const clothMap = clothes.reduce((acc, [clothName, clothType]) => {
        if (clothType in acc) {
            return {
                ...acc, 
                [clothType]: acc[clothType] + 1, 
            };
        } else {
            return {
                ...acc, 
                [clothType]: 1,
            }
        }
    }, {})
    
    const total = clothes.length
    const values = Object.values(clothMap);
    const count = values.reduce((acc, cur) => acc * (cur + 1), 1);
    
    if (values.length === 1) {
        return total;
    }
    
    return count - 1;
}