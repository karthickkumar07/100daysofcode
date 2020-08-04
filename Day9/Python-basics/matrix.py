from numpy import *  # third party package to perform matrix operations

arr = array([[1, 2, 3], [2, 3, 4]])

print(arr)

arr1 = matrix('1 2 3 ;4 5 5;6 7 8')
arr2 = matrix('1 2 3 ;4 5 5;6 7 8')

print(arr1+arr2)
print(arr1 * arr2)
print(diagonal(arr1))
print(arr1.max())
