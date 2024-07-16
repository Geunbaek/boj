my = input()

n = int(input())
answer = 0
for _ in range(n):
    mbti = input()
    if my == mbti:
        answer += 1
print(answer)
