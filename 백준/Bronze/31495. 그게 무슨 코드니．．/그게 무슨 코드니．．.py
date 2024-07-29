s = input()

if not s.startswith('"'):
    print("CE")
elif not s.endswith('"'):
    print("CE")
else:
    string = s[1:-1]
    if not string:
        print("CE")
    else:
        print(string)
