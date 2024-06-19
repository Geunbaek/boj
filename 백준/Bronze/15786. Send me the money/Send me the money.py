n, m = map(int, input().split())

s = input()

for _ in range(m):
    temp = input()
    i = 0
    
    for c in temp:
        if c == s[i]:
            i += 1
        if i == n:
            print("true")
            break
    else:
        print("false")
