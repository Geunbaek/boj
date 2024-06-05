ps = [
    'Never gonna give you up',
    'Never gonna let you down',
    'Never gonna run around and desert you',
    'Never gonna make you cry',
    'Never gonna say goodbye',
    'Never gonna tell a lie and hurt you',
    'Never gonna stop'
]

n = int(input())

flag = False
for _ in range(n):
    s = input()

    if not s in ps:
      flag = True
            
if flag:
    print("Yes")
else:
    print("No")