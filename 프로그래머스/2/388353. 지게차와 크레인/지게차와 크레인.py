from collections import deque

def oper_crane(storage, visited, target):
    n, m = len(storage), len(storage[0])
    container = target[0]
    
    for y in range(n):
        for x in range(m):
            if visited[y][x] == 1:
                continue
            if storage[y][x] != container:
                continue
            
            visited[y][x] = 1
            
def oper_fork(storage, visited, target):
    n, m = len(storage), len(storage[0])
    
    touchable = set()
    
    q = deque([(0, 0)])
    dx = [-1, 0, 1, 0]
    dy = [0, -1, 0, 1]
    
    v = set([(0, 0)])
    while q:
        x, y = q.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if not (0 <= nx < m and 0 <= ny < n):
                continue
                
            if (nx, ny) in v:
                continue
                
            if visited[ny][nx] == 0:
                if storage[ny][nx] == target:
                    touchable.add((nx, ny))
            else:
                q.append((nx, ny))
                v.add((nx, ny))
                
                
    for nx, ny in touchable:
        visited[ny][nx] = 1
                        
    
def solution(storage, requests):
    n, m = len(storage), len(storage[0])
    wrapped_storage = [[0 for _ in range(m + 2)] for _ in range(n + 2)]
    visited = [[1 for _ in range(m + 2)] for _ in range(n + 2)]
    
    for y in range(n):
        for x in range(m):
            wrapped_storage[y + 1][x + 1] = storage[y][x]
            visited[y + 1][x + 1] = 0
            
    for request in requests:
        if len(request) == 1:
            oper_fork(wrapped_storage, visited, request)
        else:
            oper_crane(wrapped_storage, visited, request)

    
    answer = 0
    for y in range(1, n + 1):
        for x in range(1, m + 1):
            if visited[y][x] == 0:
                answer += 1
    return answer