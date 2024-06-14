while 1:
    s = input()
    if s == '#':
        break
    
    answer = 0
    for c in s.lower():
        if c in ['a', 'e', 'i', 'o', 'u']:
            answer += 1
    print(answer)

