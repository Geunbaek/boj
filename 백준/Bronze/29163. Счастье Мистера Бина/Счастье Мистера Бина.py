n = int(input())

nums = list(map(int, input().split()))

odd = 0 
even = 0

for num in nums:
    if num % 2 == 0:
        even += 1
    else:
        odd += 1

if even > odd:
    print("Happy")
else:
    print("Sad")
