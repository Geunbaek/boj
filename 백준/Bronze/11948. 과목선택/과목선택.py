a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())
f = int(input())

sub1 = [a, b, c, d]
sub2 = [e, f]

sub1.sort()
sub2.sort()

print(sub1[-1] + sub1[-2] + sub1[-3] + sub2[-1])
