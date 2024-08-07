import sys

input = sys.stdin.readline

n = int(input())

d, p = (0, 0)
for _ in range(n):
    expect = input().strip()
    if expect == "D":
        d += 1
    if expect == "P":
        p += 1
    if abs(d - p) >= 2:
        break

print(f"{d}:{p}")
 