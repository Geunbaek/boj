def solution(clothes):
    from collections import defaultdict
    
    # 각 종류별 의상 개수를 센다.
    category_counts = defaultdict(int)
    for name, category in clothes:
        category_counts[category] += 1
    
    # 각 종류별 (개수 + 1)을 곱해준다.
    result = 1
    for count in category_counts.values():
        result *= (count + 1)
    
    # 아무것도 선택하지 않은 경우를 제외한다.
    return result - 1