function solution(clothes) {
    // 서로 다른 옷의 조합
    // (얼굴 개수 + 1) * (상의 개수 + 1) * (하의 개수 + 1) * (겉옷 개수 + 1) - 1
    // 각 가짓수에 + 1을 해주는 이유 : 해당 옷을 입어도 되고 입지 않아도 되기 때문에
    // -1을 해주는 이유 : "코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다" 모든 옷을 입지 않은 경우가 포함되어 있어서 -1을 해줌
    
    // 옷의 종류에 따라 그 가짓수를 확인
    const clothMap = clothes.reduce((acc, [clothName, clothType]) => {
        const count = clothType in acc ? acc[clothType] + 1 : 1;
        return {...acc, [clothType]: count};
    }, {})

    
    // (얼굴 개수 + 1) * (상의 개수 + 1) * (하의 개수 + 1) * (겉옷 개수 + 1)
    // 각 가짓수에 + 1을 해주는 이유 : 
    // 해당 옷을 입어도 되고 입지 않아도 되기 때문에 입지 않은 경우를 + 1
    const count = Object.values(clothMap).reduce((acc, cur) => acc * (cur + 1), 1);
    
    // 모든 가짓수에서 -1
    // -1을 해주는 이유 : 
    // 옷을 입지 않은 경우가 포함되어 있어서 -1을 해줌
    return count - 1;
}