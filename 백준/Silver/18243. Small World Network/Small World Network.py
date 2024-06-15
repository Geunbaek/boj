import heapq

def dij(start):
  h = []

  heapq.heappush(h, (0, start))
  dist = [float("inf") for _ in range(n + 1)]

  while h:
    cost, now = heapq.heappop(h)

    if dist[now] <= cost:
      continue

    dist[now] = cost
    for _next in graph[now]:
      if dist[_next] > cost + 1:
        heapq.heappush(h, (cost + 1, _next))

  return dist

n, k = map(int, input().split())
graph = [[] for _ in range(n + 1)]


for _ in range(k):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

flag = True

for i in range(1, n + 1):
  if not flag:
    break

  dist = dij(i)[1:]
  for d in dist[1:]:
    if d >= 7:
      flag = False
      break

if flag:
  print("Small World!")
else:
  print("Big World!")

