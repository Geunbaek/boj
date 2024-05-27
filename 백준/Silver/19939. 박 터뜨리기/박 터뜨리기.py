n, k = map(int, input().split())

total = (k * (k + 1)) // 2

if total > n:
    print(-1)
else:
    if (n - total) % k == 0:
        print(k - 1)
    else:
        print(k)
