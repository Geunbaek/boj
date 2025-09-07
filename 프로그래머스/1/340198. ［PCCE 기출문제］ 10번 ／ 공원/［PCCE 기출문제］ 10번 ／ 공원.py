from collections import deque



def solution(mats, park):
    R, C = len(park), len(park[0])
    
    board = [[0 if park[y][x] == "-1" else 1 for x in range(C)] for y in range(R)]
    prefix = [[0 for _ in range(C + 1)] for _ in range(R + 1)]
    
    for y in range(1, R + 1):
        for x in range(1, C + 1):
            prefix[y][x] = prefix[y][x - 1] + board[y - 1][x - 1]
            
    for x in range(1, C + 1):
        for y in range(1, R + 1):
            prefix[y][x] += prefix[y - 1][x]

    answer = -1
    
    for y in range(1, R + 1):
        for x in range(1, C + 1):
            for w in map(lambda x: x - 1, sorted(mats)):
                nx, ny = x + w, y + w
                
                if nx > C or ny > R:
                    continue
                    
                is_empty = (prefix[ny][nx] - prefix[ny][x - 1] - prefix[y - 1][nx] + prefix[y - 1][x - 1]) == 0
                
                if not is_empty:
                    break
                    
                answer = max(w + 1, answer)
                
    return answer