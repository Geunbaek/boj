a, d, k = map(int, input().split())


if ((k - a) < 0 and d > 0) or ((k - a) > 0 and d < 0):
  print("X")
elif (k - a) % d == 0:
  print((k - a) // d + 1)
else:
  print("X")