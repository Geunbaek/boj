s = input()
answer = 0

for c in s:
    if c in ['a', 'e', 'i', 'o', 'u']:
        answer += 1
print(answer)