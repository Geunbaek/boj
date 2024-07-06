n, m = map(int, input().split())
cache = dict()
answer = []

def contain(base, query):
    temp = base[:len(query)]

    if temp == query:
        return True
    return False

for _ in range(n):
    line = input().split()
    t = line[0]
    name = line[1]
    melody = line[2:]
    cache[name] = melody
    
for _ in range(m):
    query = input().split()
    hits = []
    for key, value in cache.items():
        if contain(value, query):
            hits.append(key)
    if hits:
        if len(hits) >= 2:
            answer.append("?")
            continue
        answer.append(hits[0])
    else:
        answer.append("!")

for a in answer:
    print(a)
    