nums = list(map(int, input().split()))

answer =0

for num in nums:
    if num > 0:
        answer += 1
        
print(answer)