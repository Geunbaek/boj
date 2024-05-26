s = input()
answer = ""

for c in s:
    if c.isupper():
        answer += chr(((ord(c) + 13) % ord("A")) % 26 + ord("A"))        
    elif c.islower():
        answer += chr((ord(c) + 13) % ord("a") % 26 + ord('a'))
    else:
        answer += c
        
print(answer)