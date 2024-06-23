import decimal
decimal.getcontext().prec = 1101

a, b = map(str, input().split())

a = decimal.Decimal(a)

print("{0:f}".format(a ** int(b)))