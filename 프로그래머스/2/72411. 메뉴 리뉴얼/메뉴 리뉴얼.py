from itertools import combinations
from collections import defaultdict

def solution(orders, course):
    answer = []
    cache = {c : defaultdict(int) for c in course}
    
    for order in orders:
        for c in course:
            for p in combinations(sorted(list(order)), c):
                cache[c][p] += 1

    
    for c in course:
        items = cache[c]
        if not items.items():
            continue
        sorted_items = sorted(items.items(), key = lambda x: (-x[-1], x[0]))
        _max = sorted_items[0][1]
        if _max < 2:
            continue
        for item, c in sorted_items:
            if c == _max:
                answer.append("".join(list(item)))
            else:
                break

    return sorted(answer)