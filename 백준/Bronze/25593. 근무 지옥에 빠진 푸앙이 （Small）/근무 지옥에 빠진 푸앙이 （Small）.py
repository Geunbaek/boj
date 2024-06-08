from collections import defaultdict

n = int(input())
time = defaultdict(int)

for _ in range(n):
  a = input().split()
  b = input().split()
  c = input().split()
  d = input().split()

  for name in a:
    if name == "-":
      continue
    time[name] += 4
  
  for name in b:
    if name == "-":
      continue
    time[name] += 6

  for name in c:
    if name == "-":
      continue
    time[name] += 4

  for name in d:
    if name == "-":
      continue
    time[name] += 10

_min = float('inf')
_max = 0

for t in time.values():
  _min = min(_min, t)
  _max = max(_max, t)

if _max - _min <= 12:
  print("Yes")
else:
  print("No")