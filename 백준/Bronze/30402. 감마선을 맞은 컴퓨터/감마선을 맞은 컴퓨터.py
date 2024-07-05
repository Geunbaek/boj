board = []
answer = ""

for _ in range(15):
    line = input().split()
    if "w" in line:
        answer = "chunbae"
        
    if "b" in line:
        answer = "nabi"
    
    if "g" in line:
        answer = "yeongcheol"
        
print(answer)
   