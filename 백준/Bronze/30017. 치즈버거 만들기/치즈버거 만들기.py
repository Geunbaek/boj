a, b = map(int, input().split())

if a == b + 1:
    print(a + b)
elif a > b:
    print(b * 2 + 1)
else:
    print(a * 2 - 1)