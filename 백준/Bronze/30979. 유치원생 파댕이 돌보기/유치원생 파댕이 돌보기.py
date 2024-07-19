t = int(input())
n = int(input())

candy = list(map(int,input().split()))

_sum = sum(candy)

if t <= _sum:
    print("Padaeng_i Happy")
else:
    print("Padaeng_i Cry")
