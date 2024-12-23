n = int(input())

board = []

for _ in range(n):
    line = list(map(int, input().split()))
    board.append(line)

dp = [[float('inf') for _ in range(n + 1)] for _ in range(n + 1)]

for y in range(1, n + 1):
    for x in range(n - 1, -1, -1):
        if x == n - 1:
            if y == 1:
                dp[y][x] = board[y - 1][x]
                continue
            dp[y][x] = dp[y - 1][x] + board[y - 1][x]
        else:
            dp[y][x] = min(dp[y - 1][x], dp[y][x + 1]) + board[y - 1][x]

print(dp[-1][0])