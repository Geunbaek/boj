import math
import sys

sys.setrecursionlimit(1_000_000_000)

n = int(input())
m = int(math.ceil(math.log(n, 3)))
board = [
  ["*" for _ in range(n)] for _ in range(n)
]

def recur(c, sx, sy, ex, ey):
  if c < 1:
    return

  standard = 3 ** (c - 1)

  for y in range(sy + standard, ey - standard):
    for x in range(sx + standard, ex - standard):
      board[y][x] = " "

  # 1 2 3
  # 4 5 6
  # 7 8 9
  # 1
  recur(c - 1, sx, sy, sx + standard, sy + standard)
  # 2
  recur(c - 1, sx + standard, sy, sx + standard * 2, sy + standard)
  # 3
  recur(c - 1, sx + standard * 2, sy, sx + standard * 3, sy + standard)
  # 4
  recur(c - 1, sx, sy + standard, sx + standard, sy + standard * 2)
  # 5
  recur(c - 1, sx + standard, sy + standard, sx + standard * 2, sy + standard * 2)
  # 6
  recur(c - 1, sx + standard * 2, sy + standard, sx + standard * 3, sy + standard * 2)
  # 7
  recur(c - 1, sx, sy + standard * 2, sx + standard, sy + standard * 3)
  # 8
  recur(c - 1, sx + standard, sy + standard * 2, sx + standard * 2, sy + standard * 3)
  # 9
  recur(c - 1, sx + standard * 2, sy + standard * 2, sx + standard * 3, sy + standard * 3)


recur(m, 0, 0, n, n)

for l in board:
  print("".join(l))