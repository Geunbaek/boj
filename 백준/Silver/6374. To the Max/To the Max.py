n = int(input())

dp = [[0 for _ in range(n + 1)] for _ in range(n + 1)]
answer = float('-inf')
i = 0
while 1:
    try:
        line = list(map(int, input().split()))
        for num in line:
            x, y = i % n, i // n
            dp[y + 1][x + 1] = num
            i += 1
    except:
        break


for y in range(1, n + 1):
    temp = 0
    for x in range(1, n + 1):
        temp += dp[y][x]
        dp[y][x] = temp

for x in range(1, n + 1):
    temp = 0
    for y in range(1, n + 1):
        temp += dp[y][x]
        dp[y][x] = temp

for y1 in range(1, n + 1):
    for x1 in range(1, n + 1):
        for y2 in range(0, y1):
            for x2 in range(0, x1):
                size = dp[y1][x1] - dp[y2][x1] - dp[y1][x2] + dp[y2][x2]
                answer = max(answer, size)
print(answer)

    

