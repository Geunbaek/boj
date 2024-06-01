bits = list(map(int, input().split()))

for bit in bits:
    if bit == 9:
        print("F")
        break
else:
    print("S")