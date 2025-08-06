import sys, math

input = sys.stdin.readline


def init_seg(now, start, end):
    if start == end:
        tree[now] = nodes[start]
        return tree[now]
    left = now * 2
    right = now * 2 + 1
    mid = (start + end) // 2
    tree[now] = init_seg(left, start, mid) + init_seg(right, mid + 1, end)
    return tree[now]

def update_seg(target, diff, now, start, end):
    if start == end:
        tree[now] += diff
        return
    
    tree[now] += diff
    mid = (start + end) // 2
    if start <= target <= mid:
        left = now * 2
        update_seg(target, diff, left, start, mid)
    
    if mid + 1 <= target <= end:
        right = now * 2 + 1
        update_seg(target, diff, right, mid + 1, end)

def sum_seg(now, start, end, l, r):
    if r < start:
        return 0
    
    if l > end:
        return 0
    
    if start <= l <= r <= end:
        return tree[now]
    
    left = now * 2
    right = now * 2 + 1
    mid = (l + r) // 2
    _sum = sum_seg(left, start, end, l, mid) + sum_seg(right, start, end, mid + 1, r)
    return _sum
  
n, m, k = map(int, input().split())

h = math.ceil(math.log2(n))
l = 2 ** (h + 1)
nodes = []

tree = [0 for _ in range(l)]

for _ in range(n):
    node = int(input())
    nodes.append(node)

nodes.extend([0 for _ in range(2 ** h - n)])

init_seg(1, 0, len(nodes) - 1)

for _ in range(m + k):
    a, b, c = map(int, input().split())
    if a == 1:
        b -= 1
        update_seg(b, c - nodes[b], 1, 0, len(nodes) - 1)
        nodes[b] = c
    else:
        b -= 1
        c -= 1
        print(sum_seg(1, b, c, 0, len(nodes) - 1))

