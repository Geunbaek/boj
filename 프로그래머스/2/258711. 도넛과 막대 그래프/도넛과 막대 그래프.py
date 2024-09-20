from collections import defaultdict, deque

def solution(edges):
    def check(start):
        q = deque([start])
        visited = set([start])
        is_cycle = False
        edge = 0
        
        while q:
            now = q.popleft()
            for _next in graph[now]:
                edge += 1
                if _next in visited:
                    is_cycle = True
                    continue
                visited.add(_next)
                q.append(_next)
                
        if not is_cycle:
            return 2
        if len(visited) == edge:
            return 1
        return 3
    
    edge_set = set() 
    degrees = defaultdict(int)
    graph = defaultdict(list)
    
    for u, v in edges:
        edge_set.add(u)
        edge_set.add(v)
        graph[u].append(v)
        degrees[v] += 1
        
    answer = [0, 0, 0, 0]
    for i in edge_set:
        if not degrees[i] and len(graph[i]) != 1:
            answer[0] = i
    
    nodes = []
    
    for v in graph[answer[0]]:
        degrees[v] -= 1
        nodes.append(v)
    
    
    for node in nodes:
        answer[check(node)] += 1
    
    return answer
    