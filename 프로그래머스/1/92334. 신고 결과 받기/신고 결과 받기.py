from collections import defaultdict

def solution(id_list, report, k):
    
    report_cache = defaultdict(set)
    reported_cache = defaultdict(int)
    report_set = set(report)
    
    for r in report_set:
        p1, p2 = r.split(" ")
        report_cache[p1].add(p2)
        reported_cache[p2] += 1
    
    banned_id = set()
    for _id, cnt in reported_cache.items():
        if cnt >= k:
            banned_id.add(_id)
    
    answer = [0 for _ in range(len(id_list))]
    for i, _id in enumerate(id_list):
        for report_id in report_cache[_id]:
            if report_id in banned_id:
                answer[i] += 1
    
    return answer