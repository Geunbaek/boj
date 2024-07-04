n, m, a, b = map(int, input().split())

board = [[0 for _ in range(m + 1)] for _ in range(n + 1)]
dp = [[0 for _ in range(m + 1)] for _ in range(n + 1)]
start = [0 for _ in range(n + 1)]
end = [0 for _ in range(n + 1)]


for _ in range(a):
  y, x = map(int, input().split())
  board[y][x] = 1

for _ in range(b):
  y, x = map(int, input().split())
  board[y][x] = 2

for y in range(n + 1):
  _min = m
  _max = 0

  for x in range(m + 1):
    if board[y][x] == 1:
      _min = min(_min, x)
      _max = max(_max, x)
    start[y] = _min
    end[y] = _max

dp[1][1] = 1

for y in range(n + 1):
  for x in range(m + 1):
    if board[y][x] == 2:
      continue
    if x <= start[y] and x >= end[y - 1]:
      dp[y][x] += dp[y - 1][x]
  
    dp[y][x] += dp[y][x - 1]

print(dp[n][m])

  