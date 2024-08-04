s, k, h = map(int, input().split())

total = s + k + h

if total >= 100:
    print("OK")
else:
    _min = min(s, k, h)
    if _min == s:
        print("Soongsil")
    elif _min == k:
        print("Korea")
    else:
        print("Hanyang")

