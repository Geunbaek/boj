from collections import deque

def solution(queue1, queue2):
    n = len(queue1) + len(queue2)
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    count = 0
    left = sum(queue1)
    right = sum(queue2)
    
    while count <= 2 * n and left != right:
        if left > right:
            num = q1.popleft()
            left -= num
            q2.append(num)
            right += num
        else:
            num = q2.popleft()
            right -= num
            q1.append(num)
            left += num
        count += 1
    return -1 if left != right else count