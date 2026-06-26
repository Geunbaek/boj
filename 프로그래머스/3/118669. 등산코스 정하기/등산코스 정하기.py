import heapq

MAX = 10_000_001

def solution(n, paths, gates, summits):
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
        intensities = [MAX for _ in range(n + 1)]
        
        for summit in summits:
            heapq.heappush(h, (0, summit, summit))
            
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