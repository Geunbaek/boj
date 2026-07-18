import copy

def solution(n, info):
    
    def check_win(info, scores):
        a = 0
        l = 0
        for i in range(11):
            if info[i] == 0 and scores[i] == 0:
                continue
            if info[i] >= scores[i]:
                a += 10 - i
            else:
                l += 10 - i
        return l > a, l - a
    
    def get_cases(depth, remain):
        if depth >= 11 or remain <= 0:
            if remain > 0:
                scores[-1] = remain
            is_win, diff = check_win(info, scores)
            if is_win:
                answer.append((diff, "".join(map(str, scores[::-1]))))
            return 
        
        if info[depth] < remain:
            scores[depth] = info[depth] + 1
            get_cases(depth + 1, remain - (info[depth] + 1))
            scores[depth] = 0
        scores[depth] = 0
        get_cases(depth + 1, remain)
        scores[depth] = 0
            
    scores = [0 for _ in range(11)]
    answer = []
    get_cases(0, n)
    answer.sort(reverse=True)
    if not answer:
        return [-1]
    return list(map(int, answer[0][1][::-1]))