t = int(input())


x = 50
y = 50
d = 3

def turnLeft():
  global d
  d -= 1
  if d < 0:
    d = 3

def turnRight():
  global d
  d = d + 1
  d %= 4

def go():
  global x, y
  x = x + dx[d]
  y = y + dy[d]

operations = input()
board = [["" for _ in range(101)] for _ in range(101)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
board[y][x] = '.'

for operation in operations:
  if operation == "R":
    turnRight()
  elif operation == "L":
    turnLeft()
  elif operation == "F":
    go()
  board[y][x] = "."

min_x, max_x = 101, 0
min_y, max_y = 101, 0

for y in range(101):
  for x in range(101):
    if board[y][x] == ".":
      min_x = min(min_x, x)
      max_x = max(max_x, x)
      min_y = min(min_y, y)
      max_y = max(max_y, y)

for y in range(min_y, max_y + 1):
  line = map(lambda x: x if x == "." else "#", board[y][min_x: max_x + 1])
  print("".join(line))





