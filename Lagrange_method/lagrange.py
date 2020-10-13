import numpy as np


def lagrange(n, arr, val):
    result = 0

    for j in range(n):
        aux = 1
        for i in range(n):
            if i != j:
                aux = aux * ((val - arr[i][0]) / (arr[j][0] - arr[i][0]))
        result = result + arr[j][1] * aux
    return result


x = 3
a = np.array([[2, 4], [5, 1]])

print(f"f({x}) = {lagrange(1, a, 10)}")
