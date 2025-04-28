def solution(money):
    n = len(money)
    
    ldp = money[:]
    ldp[2] += ldp[0]
    for i in range(3, n - 1):
        ldp[i] += max(ldp[i - 2], ldp[i - 3])
    
    rdp = money[:]   
    rdp[-3] += rdp[-1]
    for i in range(n - 4, 0, -1):
        rdp[i] += max(rdp[i + 2], rdp[i + 3])
    return max(ldp + rdp)
    
    
    
    
    answer = 0
    return answer