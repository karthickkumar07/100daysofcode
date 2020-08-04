# filter
from functools import reduce
arr = [1, 2, 3, 4, 5, 6, 7, 8]


def isEven(n):
    if n % 2 == 0:
        return 1


arr = list(filter(isEven, arr))
print(arr)


arr = list(filter(lambda n: n % 2 == 0, arr))
print(arr)

# Map
arr = list(map(lambda n: n*3.14, arr))
print(arr)

# Reduce


arr = reduce(lambda a, b: a+b, arr)
print(arr)
