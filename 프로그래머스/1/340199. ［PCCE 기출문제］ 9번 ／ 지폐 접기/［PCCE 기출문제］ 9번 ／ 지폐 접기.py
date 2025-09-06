def solution(wallet, bill):
    answer = 0
    w, h = max(wallet), min(wallet)
    _max, _min = max(bill), min(bill)
    
    while 1:
        if _max <= w and _min <= h:
            return answer
        
        _max = _max // 2

        _max, _min = max(_max, _min), min(_max, _min)
        answer += 1
    return answer