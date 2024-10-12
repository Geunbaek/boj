import sys, heapq

input = sys.stdin.readline

def dij(start):
  h = []
  dist = [float('inf') for _ in range(n)]

  heapq.heappush(h, [0, start])

  while h:
    time, now = heapq.heappop(h)
    if dist[now] >= time:
      dist[now] = time

      for _next, blue_time in graph[now]:
        next_time = (time // m) * m + blue_time
        if next_time < time:
          next_time += m
     
        if next_time + 1 <= dist[_next]:
          heapq.heappush(h, [next_time + 1, _next])

  return dist

n, m = map(int, input().split())

graph = [[] for _ in range(n)]

for i in range(m):
  a, b = map(lambda x: int(x) - 1, input().split())
  graph[a].append((b, i))
  graph[b].append((a, i))

print(dij(0)[-1])