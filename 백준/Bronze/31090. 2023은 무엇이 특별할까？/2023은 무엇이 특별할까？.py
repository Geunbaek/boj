t = int(input())

for _ in range(t):
  y = input()
  y_to_int = int(y) + 1
  div = int(y[-2:]) 

  if y_to_int % div == 0:
    print("Good")
  else:
    print("Bye")