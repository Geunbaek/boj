answer = 0

try: 
    while True: 
        line = input() 
        answer += 1
except EOFError: 
    pass 

print(answer)