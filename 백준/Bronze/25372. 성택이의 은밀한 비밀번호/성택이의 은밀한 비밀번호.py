n = int(input())

def is_valid_password(password):
    length = len(password)
    return 6 <= length <= 9

for _ in range(n):
    s = input()
    if is_valid_password(s):
        print("yes")
    else:
        print("no")
    