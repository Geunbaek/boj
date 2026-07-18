def solution(board, skill):
    r, c = len(board), len(board[0])
    
    damage_board = [[0 for _ in range(c + 1)] for _ in range(r + 1)]
    
    for s in skill:
        t, r1, c1, r2, c2, degree = s
        if t == 1:
            degree *= -1
        damage_board[r1][c1] += degree
        damage_board[r2 + 1][c1] += -degree
        damage_board[r1][c2 + 1] += -degree
        damage_board[r2 + 1][c2 + 1] += degree
        
    for y in range(r + 1):
        for x in range(1, c + 1):
            damage_board[y][x] += damage_board[y][x - 1]
    
    for x in range(c + 1):
        for y in range(1, r + 1):
            damage_board[y][x] += damage_board[y - 1][x]
    answer = 0
    
    for y in range(r):
        for x in range(c):
            if board[y][x] + damage_board[y][x] > 0:
                answer += 1
            board[y][x] += damage_board[y][x]
                
    return answer