from collections import Counter, deque

n = int(input())
s = deque(list(input()))
mid = n // 2

words =[]

while len(s) > 1:
  words.append(s.popleft())
  words.append(s.pop())

counter = Counter(words)

for key, val in counter.items():
  if val % 2 != 0:
    print("No")
    break
else:
  print("Yes")