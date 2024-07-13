n = int(input())
answer =0

a = list(map(int, input().split()))
b = list(map(int, input().split()))

for n1, n2 in zip(a, b):
    if n1 <= n2:
        answer += 1

print(answer)