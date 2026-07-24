def level1(_id):
    new_id = ""
    for s in _id:
        if not s.islower():
            new_id += s.lower()
        else:
            new_id += s
    return new_id

def level2(_id):
    white_list = set()
    
    for i in range(26):
        white_list.add(chr(ord('a') + i))
        
    for i in range(10):
        white_list.add(chr(ord('0') + i))
        
    for s in "-_.":
        white_list.add(s)
    
    new_id = "" 
    for s in _id:
        if s in white_list:
            new_id += s
    return new_id

def level3(_id):
    stack = []
    
    for s in _id:
        while stack and s == '.' and stack[-1] == '.':
            stack.pop()
        stack.append(s)

    return "".join(stack)

def level4(_id):
    left = 0
    right = len(_id) - 1
    
    while left < len(_id) and _id[left] == '.':
        left += 1
    
    while right > 0 and _id[right] == '.':
        right -= 1
    return _id[left: right + 1]

def level5(_id):
    if not _id:
        return "a"
    return _id

def level6(_id):
    return _id[:15]

def level7(_id):
    new_id = _id
    
    while len(new_id) <= 2:
        new_id += _id[-1]
        
    return new_id
    
def solution(new_id):
    new_id = level1(new_id)
    new_id = level2(new_id)
    new_id = level3(new_id)
    new_id = level4(new_id)
    new_id = level5(new_id)
    new_id = level6(new_id)
    new_id = level4(new_id)
    return level7(new_id)