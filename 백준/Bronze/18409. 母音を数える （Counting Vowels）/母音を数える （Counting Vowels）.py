n= int(input())
s = input()

answer = 0
for i in ["a", "e", "i", "o", "u"]:
    answer += s.count(i)
    
print(answer)