import heapq

def solution(cap, n, deliveries, pickups):
    delivery_dist = []
    
    for i, delivery in enumerate(deliveries):
        if delivery:
            heapq.heappush(delivery_dist, (-i, delivery))
    
    pickup_dist = []
    
    for i, pickup in enumerate(pickups):
        if pickup:
            heapq.heappush(pickup_dist, (-i, pickup))
            
    answer = 0
    while delivery_dist or pickup_dist:
        max_dist = 0
        cur_cap = 0
        while delivery_dist and cap > cur_cap:
            i, d = heapq.heappop(delivery_dist)
            max_dist = max(max_dist, -i + 1)
            if cur_cap + d > cap:
                heapq.heappush(delivery_dist, (i, cur_cap + d - cap))
                cur_cap = cap
            else:
                cur_cap += d
            
        cur_cap = 0
        while pickup_dist and cap > cur_cap:
            i, d = heapq.heappop(pickup_dist)
            max_dist = max(max_dist, -i + 1)
            if cur_cap + d > cap:
                heapq.heappush(pickup_dist, (i, cur_cap + d - cap))
                cur_cap = cap
            else:
                cur_cap += d
        
        answer += max_dist * 2
        
    return answer