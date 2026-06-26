from collections import deque, defaultdict
import math, heapq


MAX = 10_000_001

def solution(n, paths, gates, summits):
#     graph = [[] for _ in range(n + 1)]
    
#     # for i, summit in enumerate(summits):
    
#     for u, v, w in paths:
#         graph[u].append((v, w))
#         graph[v].append((u, w))
        
#     def can_climb():
#         h = []
#         intensities = [MAX for _ in range(n + 1)]
        
#         for gate in gates:
#             heapq.heappush(h, (0, gate))
            
#         while h:
#             intensity, now = heapq.heappop(h)
            
#             if now in summit_set:
#                 return [now, intensity]
            
#             if intensities[now] > intensity:
#                 intensities[now] = intensity
                
#                 for _next, cost in graph[now]:
#                     if _next in gate_set:
#                         continue
#                     if intensities[_next] > max(cost, intensity):
#                         heapq.heappush(h, (max(cost, intensity), _next))
#         return [MAX, MAX]
        
#     summit_set = set(summits)
#     gate_set = set(gates)
    
#     l, r = 0, MAX
    
#     min_summit = 50_001
#     min_intensity = MAX
    
#     while l <= r:
#         mid = (l + r) // 2
        
#         node, intensity = can_climb()
#         if intensity <= mid:
#             l = mid + 1
#             if min_intensity > intensity:
#                 min_intensity = intensity
#                 min_summit = node
#             elif min_intensity == intensity:
#                 min_summit = min(min_summit, node)
#         else:
#             r = mid - 1
#     return [min_summit, min_intensity]
    
    
    def find(p, x):
        if p[x] != x:
            p[x] = find(p, p[x])
            
        return p[x]
    
    def union(p, a, b):
        ap = find(p, a)
        bp = find(p, b)
        p[ap] = bp
        
    
    def bfs():
        h = []
        # q = deque()
        # visited = [0 for _ in range(n + 1)]   
        intensities = [MAX for _ in range(n + 1)]
        
        for summit in summits:
            heapq.heappush(h, (0, summit, summit))
            # q.append((summit, summit, 0));
            # visited[summit] = 1
            
        while h:
            intensity, start, now = heapq.heappop(h)
            
            if now in gate_set:
                return [start, intensity]
            
            if intensities[now] > intensity:
                intensities[now] = intensity
                
                for _next, cost in mst[now]:
                    if _next in summits_set:
                        continue
                    if intensities[_next] > max(intensity, cost):
                        heapq.heappush(h, (max(intensity, cost), start, _next))
        
        # intensities = {summit: 10_000_001 for summit in summits}
#         while q:
#             start, now, intensity = q.popleft()
#             if start != now and now in summits_set:
#                 continue
#             if now in gate_set:
#                 intensities[start] = min(intensities[start], intensity)
#                 continue
            
#             for _next, cost in mst[now]:
#                 if visited[_next] == 1:
#                     continue
#                 if _next not in gate_set:
#                     visited[_next] = 1
#                 q.append((start, _next, max(intensity, cost)))
        
#         _min = 10_000_001
#         node = -1
#         for i, intensity in intensities.items():
#             if _min > intensity:
#                 _min = intensity
#                 node = i
#             if _min == intensity:
#                 node = min(node, i)
                
#         return [node, _min]
                    
    gate_set = set(gates)
    summits_set = set(summits)
    paths.sort(key = lambda x: x[-1])
    p = [i for i in range(n + 1)]
    mst = [[] for _ in range(n + 1)]
    
    for u, v, w in paths:
        if find(p, u) != find(p, v):
            union(p, u, v)
            mst[u].append((v, w))
            mst[v].append((u, w))
    return bfs()