k, n, m = map(int, input().split())

total = k * n

print(total - m if total > m else 0)
