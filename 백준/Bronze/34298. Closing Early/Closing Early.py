import sys

R, S, N = map(int, input().split())

pizza = list(map(int, input().split()))
answer = -1
_sum = 0

for i, p in enumerate(pizza):
    if R == 0:
        answer = 0
        break

    _sum += p
    if _sum % S == R:
        answer = i + 1
        break

print(answer)