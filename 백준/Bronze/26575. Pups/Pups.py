n = int(input())
for _ in range(n):
    a, b, c = map(float, input().split())
    
    print("$%0.2f" % round((a * b * c), 2))
