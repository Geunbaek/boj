import math

n = int(input())
s = input()

chicken = s.count("C")
others = n - chicken

print(math.ceil(chicken / (others + 1)))