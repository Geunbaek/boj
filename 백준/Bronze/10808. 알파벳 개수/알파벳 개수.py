s = input()
alpha = [0 for _ in range(26)]

for c in s:
    now = ord(c) - ord('a')
    alpha[now] += 1
    
print(*alpha)