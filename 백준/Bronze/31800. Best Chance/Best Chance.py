n = int(input())

costs = list(map(int, input().split()))
money = list(map(int, input().split()))

answer = [0 for _ in range(n)]

temp = []

for i, (c, m) in enumerate(zip(costs, money)):
    temp.append((c, m, i))
temp.sort(reverse=True)

    
for (c1, m1, i) in temp:
    for (c2, m2, j) in temp:
        if i == j:
            continue
        answer[i] = c1 - (c2 - m1) - m1
        break
    
print(*answer)