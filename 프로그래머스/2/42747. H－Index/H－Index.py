import heapq

def solution(citations):
    n = len(citations)
    
    h = []
    
    for citation in citations:
        heapq.heappush(h, citation)
        
    while h:
        min_citation = heapq.heappop(h)
        
        if min_citation >= len(h) + 1:
            return len(h) + 1
        
    return 0