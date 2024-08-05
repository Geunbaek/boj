from itertools import permutations

n = int(input())
k = int(input())

cards = []

for _ in range(n):
  card = int(input())
  cards.append(card)

answer = set()
for comb in permutations(cards, k):
  answer.add(int("".join(map(lambda x: str(x),comb))))
print(len(answer))
