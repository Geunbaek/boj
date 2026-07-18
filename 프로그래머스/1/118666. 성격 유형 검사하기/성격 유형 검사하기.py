from collections import defaultdict

def solution(survey, choices):
    _case = ["RT", "CF", "JM", "AN"]
    score = defaultdict(int)
    
    for s, c in zip(survey, choices):
        if c < 4:
            score[s[0]] += 4 - c
        elif c > 4:
            score[s[1]] += c - 4
    
    answer = ""
    for c in _case:
        s1 = score[c[0]]
        s2 = score[c[1]]
        
        if s1 == s2:
            answer += min(c[0], c[1])
            continue
        if s1 > s2:
            answer += c[0]
        else:
            answer += c[1]
            
    return answer