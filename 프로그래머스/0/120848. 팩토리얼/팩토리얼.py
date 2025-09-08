def solution(n):
    dp = [1]
    
    for i in range(2, 3_628_801):
        dp.append(dp[-1] * i)
        if dp[-1] == n:
            return i
        
        if dp[-1] > n:
            return i - 1
    return -1