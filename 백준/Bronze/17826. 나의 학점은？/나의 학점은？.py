nums = list(map(int, input().split()))
score = int(input())
nums.sort(reverse=True)

rank = nums.index(score) + 1

if 1 <= rank <= 5:
    print('A+')
elif 6 <= rank <= 15:
    print('A0')
elif 16 <= rank <= 30:
    print('B+')
elif 31 <= rank <= 35:
    print('B0')
elif 36 <= rank <= 45:
    print('C+')
elif 46 <= rank <= 48:
    print('C0')
else:
    print('F')
