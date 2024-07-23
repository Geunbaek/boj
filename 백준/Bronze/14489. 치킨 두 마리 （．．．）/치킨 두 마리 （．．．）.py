a, b = map(int, input().split())
chicken = int(input())

if a + b >= 2 * chicken:
    print(a + b - 2 * chicken)
else:
    print(a + b)
