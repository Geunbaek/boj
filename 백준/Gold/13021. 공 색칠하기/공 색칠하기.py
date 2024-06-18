n, m = map(int, input().split())

b = [0 for _ in range(n)]

for i in range(m):
    l, r = map(int, input().split())
    b[l - 1:r] = [i + 1] * (r - l + 1)
    
print(2 ** len(set(b) - {0}))