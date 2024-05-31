a = list(map(int, input().split()))
b = list(map(int, input().split()))
scores = [6, 3, 2, 1, 2]

score_a = 0
score_b = 0

for i in range(5):
    score_a += a[i] * scores[i]
    score_b += b[i] * scores[i]
    
print(score_a)
print(score_b)