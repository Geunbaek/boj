n, m = map(int, input().split())
answer = 0

for _ in range(n):
    s = input()
    ok = s.count('O')
    no = s.count('X')
    
    if ok > no:
        answer += 1
print(answer)