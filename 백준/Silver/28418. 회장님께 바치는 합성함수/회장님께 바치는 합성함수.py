f2, f1, f0= map(int, input().split())
g1, g0 = map(int, input().split())

p2 = f2 * (g1 * g1)
p1 = 2 * (f2 * g1 * g0) + f1 * g1
p0 = f2 * (g0 * g0) + f1 * g0 + f0

q2 = f2 * g1
q1 = f1 * g1
q0 = f0 * g1 + g0

a, b, c = p2 - q2, p1 - q1, p0 - q0
oper = (b * b) - 4 * a * c

a, b, c = p2 - q2, p1 - q1, p0 - q0
oper = (b * b) - 4 * a * c

if a == 0:
  if b == 0:
    if c == 0:
      print("Nice")
    else:
      print("Head on")
  else:
    print("Remember my character")
elif oper > 0:
  print("Go ahead")
elif oper == 0:
  print("Remember my character")
else:
  print("Head on")