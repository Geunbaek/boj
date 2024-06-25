l, p = map(int, input().split())

arr = map(lambda x: int(x) - (l * p), input().split())

print(*arr)