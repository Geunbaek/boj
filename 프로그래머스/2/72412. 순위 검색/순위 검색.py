LANGUAGES = ["cpp", "java", "python"]
POSITION = ["backend", "frontend"]
CAREER = ["junior", "senior"]
SOUL_FOODS = ["chicken", "pizza"]

def solution(info, query):
    search_order = [LANGUAGES, POSITION, CAREER, SOUL_FOODS]
    
    def binary_search(scores, num):
        l = 0
        r = len(scores) - 1
        while l <= r:
            mid = (l + r) // 2
            if scores[mid] >= num:
                r = mid - 1
            else:
                l = mid + 1
        return l
    
    def search(depth, q, now):
        now_query = q[depth]
        if depth >= 4:
            index = binary_search(now, int(now_query))
            return len(now) - index
        
        ret = 0
        if now_query == '-':
            for s in search_order[depth]:
                ret += search(depth + 1, q, now[s])
        else:
            ret += search(depth + 1, q, now[now_query])
        return ret
    
    memo = {}
    
    for l in LANGUAGES:
        memo[l] = {}
        for p in POSITION:
            memo[l][p] = {}
            for c in CAREER:
                memo[l][p][c] = {}
                for f in SOUL_FOODS:
                    memo[l][p][c][f] = []
            
    for data in info:
        l, p, c, f, s = data.split(" ")
        memo[l][p][c][f].append(int(s))
        
    for l in LANGUAGES:
        for p in POSITION:
            for c in CAREER:
                for f in SOUL_FOODS:
                    memo[l][p][c][f].sort()
                    
    answer = []
    for q in query:
        splited_q = q.replace("and ", "").split(" ")
        answer.append(search(0, splited_q, memo))
        
    return answer