answer = []
while 1:
    line=input()
    if line == "END":
        break
    
    words=list(map(lambda x:x[::-1],line.split()))
    answer.append(" ".join(words[::-1]))

for a in answer:
    print(a)