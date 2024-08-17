import sys
input = sys.stdin.readline
n = int(input())
works = list(map(int,input().split()))

dp = [0 for _ in range(7)] 
dp[0] = 1 

for work in works: # A의 요소 하나씩 꺼냄
    temp = [0 for _ in range(7)] 
    for i in range(7): 
        if dp[i]:            
            temp[(work + i) % 7] = 1 
            temp[i] = 1        
    dp = temp 
if dp[4]:
    print("YES")
else: 
    print("NO")