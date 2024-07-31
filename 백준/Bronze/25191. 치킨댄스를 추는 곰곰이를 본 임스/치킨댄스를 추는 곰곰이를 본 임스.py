c = int(input())

co, be = map(int, input().split())

total = co // 2 + be // 1

print(min(c, total))
