def _prev(time):
    if time < 10:
        return 0
    return time - 10

def _next(time, end_time):
    if end_time - time < 10:
        return end_time
    return time + 10

def _skip(time, op_start, op_end):
    if (op_start <= time <= op_end):
        return op_end
    return time

def min_to_sec(time):
    minute, second = map(int, time.split(":"))
    return minute * 60 + second

def sec_to_min(time):
    minute = str(time // 60).zfill(2)
    second = str(time % 60).zfill(2)
    return f"{minute}:{second}"

def solution(video_len, pos, op_start, op_end, commands):
    video_len = min_to_sec(video_len)
    pos = min_to_sec(pos)
    op_start = min_to_sec(op_start)
    op_end = min_to_sec(op_end)
    pos = _skip(pos, op_start, op_end)
    
    for command in commands:
        if command == "next":
            pos = _next(pos, video_len)
        elif command == "prev":
            pos = _prev(pos)
            
        pos = _skip(pos, op_start, op_end)
            
    return sec_to_min(pos)
            