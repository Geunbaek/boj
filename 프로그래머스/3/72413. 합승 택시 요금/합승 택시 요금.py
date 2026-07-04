import heapq

def solution(n, s, a, b, fares):
    def dij(start):
        h = [(0, start)]
        dists = [float('inf') for _ in range(n + 1)]
            
        while h:
            cost, now = heapq.heappop(h)
            
            if dists[now] > cost:
                dists[now] = cost
                
                for _next, w in graph[now]:
                    if dists[_next] > w + cost:
                        heapq.heappush(h, (w + cost, _next))
        return dists
    
    graph = [[] for _ in range(n + 1)]
    
    for u, v, w in fares:
        graph[u].append((v, w))
        graph[v].append((u, w))
        
    s_dists = dij(s)
    
    answer = s_dists[a] + s_dists[b]
    
    for c in range(1, n + 1):
        if c == s:
            continue
        
        c_dists = dij(c)
        answer = min(answer, s_dists[c] + c_dists[a] + c_dists[b])
    return answer