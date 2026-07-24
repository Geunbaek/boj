
from collections import deque

def solution(places):
    def bfs(sx, sy, place):
        visited = set()
        
        q = deque()
        q.append((sx, sy, 0))
        visited.add((sx, sy))
        
        while q:
            x, y, c = q.popleft()
            
            if c >= 2:
                continue
                
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                
                if not (0 <= nx < 5 and 0 <= ny < 5):
                    continue
                    
                if (nx, ny) in visited:
                    continue
                    
                if place[ny][nx] == "X":
                    continue
                
                if place[ny][nx] == "P":
                    return False
                    
                visited.add((nx, ny))
                q.append((nx, ny, c + 1))
        return True
    
    dx = [-1, 0, 1, 0]
    dy = [0, -1, 0, 1]
    answer = []
    for place in places:
        is_valid = True
        for y in range(5):
            for x in range(5):
                if place[y][x] == 'P':
                    is_valid &= bfs(x, y, place)
            if not is_valid:
                break
        answer.append(1 if is_valid else 0)
    
    return answer