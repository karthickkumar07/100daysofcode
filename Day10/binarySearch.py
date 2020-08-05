pos = -1


def search(list, n):
    l = 0
    u = len(list)-1

    while l <= u:
        m = (l+u)//2

        if list[m] == n:
            globals()['pos'] = m
            return True
        else:
            if list[m] < n:
                l = m+1
            else:
                u = m-1


list = [2, 4, 54, 65, 71, 99, 121, 234]
n = int(input())

if search(list, n):
    print("Found at ", pos+1)
else:
    print("Not Found")
