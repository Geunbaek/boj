def solution(arr):
    n = len(arr)
    
    memo = {}

    def dfs(start, end):
        if (start, end) in memo:
            return memo[(start, end)]
        
        if start == end:
            val = int(arr[start])
            memo[(start, end)] = (val, val)
            return (val, val)

        max_val = float('-inf')
        min_val = float('inf')

        for i in range(start + 1, end, 2):  
            op = arr[i]
            
            left_max, left_min = dfs(start, i - 1)
            right_max, right_min = dfs(i + 1, end)
            
            if op == '+':
                max_candidate = left_max + right_max
                min_candidate = left_min + right_min
            else:
                max_candidate = left_max - right_min
                min_candidate = left_min - right_max

            max_val = max(max_val, max_candidate)
            min_val = min(min_val, min_candidate)

        memo[(start, end)] = (max_val, min_val)
        return (max_val, min_val)

    answer, _ = dfs(0, n - 1)
    return answer