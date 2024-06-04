n = int(input())
nums = list(map(int, input().split()))

total = sum(nums)

if total > 0:
    print("Right")
elif total < 0:
    print("Left")
else:
    print("Stay")
