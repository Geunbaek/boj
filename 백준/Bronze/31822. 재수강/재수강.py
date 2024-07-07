s = input()
n = int(input())
code = s[:5]
answer = 0

for _ in range(n):
    c = input()
    compare = c[:5]
    if code == compare:
        answer += 1
        
print(answer)