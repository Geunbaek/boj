from collections import deque

case = 1
while 1:
  n = int(input())
  if n == 0:
    break

  board = []

  dp = [[float('inf') for _ in range(3)] for _ in range(n)]

  for _ in range(n):
    line = list(map(int, input().split()))
    board.append(line)
  dp[0][1] = board[0][1]

  for i in range(1, n * 3 - 1):
    x = i % 3
    y = i // 3

    if y != n - 1:  
      if x == 2:
        dp[y + 1][x] = min(dp[y + 1][x], dp[y][x] + board[y + 1][x])
        dp[y + 1][x - 1] = min(dp[y + 1][x - 1], dp[y][x] + board[y + 1][x - 1])
      elif x == 0:
        dp[y][x + 1] = min(dp[y][x + 1], dp[y][x] + board[y][x + 1])
        dp[y + 1][x] = min(dp[y + 1][x], dp[y][x] + board[y + 1][x])
        dp[y + 1][x + 1] = min(dp[y + 1][x + 1], dp[y][x] + board[y + 1][x + 1])
      else:
        dp[y][x + 1] = min(dp[y][x + 1], dp[y][x] + board[y][x + 1])
        dp[y + 1][x - 1] = min(dp[y + 1][x - 1], dp[y][x] + board[y + 1][x - 1])
        dp[y + 1][x] = min(dp[y + 1][x], dp[y][x] + board[y + 1][x])
        dp[y + 1][x + 1] = min(dp[y + 1][x + 1], dp[y][x] + board[y + 1][x + 1])
    else:
      dp[y][x + 1] = min(dp[y][x + 1], dp[y][x] + board[y][x + 1])
    
  print(f"{case}. {dp[-1][1]}")
  case += 1