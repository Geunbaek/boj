h, m, s = map(int, input().split())
diff = int(input())

H = 60 * 60
M = 60

diff_h = diff // H
diff_m = (diff - (diff_h * H)) // M
diff_s = diff - (diff_h * H) - (diff_m * M) 

h += diff_h
m += diff_m
s += diff_s

if s >= 60:
  m += s // 60
  s %= 60

if m >= 60:
  h += m // 60
  m %= 60

if h >= 24:
  h %= 24

print(h, m, s)