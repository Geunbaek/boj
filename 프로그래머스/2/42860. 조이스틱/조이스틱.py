def get_min_diff(char):
    diff1 = ord("Z") - ord(char) + 1
    diff2 = ord(char) - ord("A")
    return min(diff1, diff2)

def solution(name):
    n = len(name)
    vertical = sum(get_min_diff(c) for c in name)
    move = n - 1 

    for i in range(n):
        _next = i + 1
        while _next < n and name[_next] == 'A':
            _next += 1
            
        front = i + i + (n - _next)
        back = 2 * (n - _next) + i
        move = min(move, front, back)

    return vertical + move
