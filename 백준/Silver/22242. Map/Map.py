import re
import math

def calculate_distance(path):
    x, y = 0, 0

    pattern = re.compile(r'([wens])(\d{1,2})')
    
    matches = pattern.findall(path)
    
    for match in matches:
        direction, distance = match
        distance = int(distance)
        
        if direction == 'n':
            y += distance
        elif direction == 's':
            y -= distance
        elif direction == 'e':
            x += distance
        elif direction == 'w':
            x -= distance
    
    distance_from_start = (x ** 2 + y ** 2) ** 0.5
    
    return round(distance_from_start, 2)

s = input().lower()

print("%.2f" % calculate_distance(s))  