from collections import defaultdict
def solution(tickets):
    graph = defaultdict(list)
    
    for a, b in sorted(tickets):
        graph[a].append(b)
    
    answer = []
    
    def dfs(a):
        while graph[a]:
            dfs(graph[a].pop(0))
        answer.append(a)
    dfs("ICN")
    return answer[::-1]