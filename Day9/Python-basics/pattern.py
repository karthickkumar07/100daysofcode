# *
# * *
# * * *
# * * * *


for i in range(4):
    for j in range(i+1):
        print("- ", end="")

    print()


# - - - -
# - - -
# - -
# -

for i in range(4):
    for j in range(4-i):
        print("- ", end="")

    print()

# A P Q R
# A B Q R
# A B C R
# A B C D

x = 65
y = 80

for i in range(4):
    x = 65
    y += i
    for j in range(4):
        if(j <= i):
            print(chr(x), end="")
            x += 1
        else:
            print(chr(y), end="")
            y += 1

    print()
    y = 80

# 1 2 3 4
# 2 3 4
# 3 4
# 4

for i in range(4):
    k = i+1
    for j in range(4-i):
        print(k, end=" ")
        k += 1

    print()
