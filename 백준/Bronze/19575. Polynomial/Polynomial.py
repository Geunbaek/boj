import sys

input = sys.stdin.readline
n, x = map(int, input().split())
answer = 0

MOD = 1_000_000_007

for i in range(n + 1):
    a, b = map(int, input().split())
    if i == 0:
        answer = a
    else:
        answer = (answer * x + a) % MOD

print(answer)
