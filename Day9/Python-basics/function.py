user = True


def signedIn(user):
    if user == True:
        print("allow user")
        print("success")

    else:
        print("access denied")


signedIn(user)


########


def isPalindrome(s):
    return s == s[::-1]


s = "karthiihtrak"
ans = isPalindrome(s)

if ans:
    print("Yes")
else:
    print("No")

s = "Vijay"
print(s[-1::-1])


########

def Factorial(n, c):
    if(c == 0):
        return n
    c -= 1
    return(n * Factorial(n, c))


print(Factorial(5, 2))
