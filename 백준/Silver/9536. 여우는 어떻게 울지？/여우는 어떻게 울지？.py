t = int(input())

for _ in range(t):
  index = 0
  raw = ""

  cache = dict()

  while 1:
    line = input()
    if line == "what does the fox say?":
      break

    if index == 0:
      raw = line.split()
    else:
      sounds = line.split()

      animal = sounds[0]
      sound = sounds[2]
      raw = list(filter(lambda x: x != sound, raw))
    index += 1
  print(" ".join(raw))