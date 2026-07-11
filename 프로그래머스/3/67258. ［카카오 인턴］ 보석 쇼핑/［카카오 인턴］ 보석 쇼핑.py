
def solution(gems):
    n = len(gems)
    m = len(set(gems))
    
    r = 0
    memo = dict()
    answer = []
    for l in range(n):
        while r < n and len(memo) < m:
            gem = gems[r]
            if gem not in memo:
                memo[gem] = 0 
            memo[gem] += 1
            r += 1
        if len(memo) == m:
            answer.append((r - l, l + 1, r))
        memo[gems[l]] -= 1
        if memo[gems[l]] == 0:
            del memo[gems[l]]
            
    answer.sort()
    return [answer[0][1], answer[0][2]]