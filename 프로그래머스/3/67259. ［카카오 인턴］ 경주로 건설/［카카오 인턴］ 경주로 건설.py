import heapq

def solution(board):
    MAX = 1_000_000_001
    r, c = len(board), len(board[0])

    h = []
    dist = [[[MAX for _ in range(4)] for _ in range(c)] for _ in range(r)]
    
    dx = [-1, 0, 1, 0]
    dy = [0, -1, 0, 1]
    
    heapq.heappush(h, (100, 0, 0, 2))
    heapq.heappush(h, (100, 0, 0, 3))
    
    while h:
        cost, x, y, d = heapq.heappop(h)
        if dist[y][x][d] > cost:
            dist[y][x][d] = cost
            
            for i in [d, d - 1 if d > 0 else 3, (d + 1) % 4]:
                nx = x + dx[i]
                ny = y + dy[i]
                if not (0 <= nx < c and 0 <= ny < r):
                    continue
                    
                if board[ny][nx] == 1:
                    continue
                
                if i == d:
                    if dist[ny][nx][i] > cost + 100:
                        heapq.heappush(h, (cost + 100, nx, ny, i))
                else:
                    if dist[ny][nx][i] > cost + 600:
                        heapq.heappush(h, (cost + 600, nx, ny, i))
        
    return min(dist[-1][-1]) - 100