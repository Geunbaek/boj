from collections import deque


def solution(bridge_length, weight, truck_weight):
    answer = 0
    bridge = deque([0 for _ in range(bridge_length)])
    truck_weight = deque(truck_weight)
    current_weight = 0
    while truck_weight:
        if truck_weight and current_weight + truck_weight[0] <= weight:
            temp = truck_weight.popleft()
            bridge.append(temp)
            current_weight += temp
        while len(bridge) < bridge_length:
            bridge.append(0)
        temp = bridge.popleft()
        current_weight -= temp
        answer += 1
    while current_weight != 0:
        current_weight -= bridge.popleft()
        answer += 1
    return answer