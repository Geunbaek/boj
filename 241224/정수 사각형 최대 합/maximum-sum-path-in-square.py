n = int(input())

board= []

for _ in range(n):
    line = list(map(int, input().split()))
    board.append(line)

dp = [[0 for _ in range(n + 1)] for _ in range(n + 1)]

for y in range(1, n + 1):
    for x in range(1, n + 1):
        dp[y][x] = max(dp[y - 1][x], dp[y][x - 1]) + board[y - 1][x - 1]

print(dp[-1][-1])