n, m  = map(int, input().split())

scores = list(map(int, input().split()))

scores.sort()
answer = 0
left, right = 0, n - 1

while left < right:
  if scores[left] + scores[right] < m:
    left += 1
  else:
    answer += 1
    left += 1
    right -= 1

print(answer)