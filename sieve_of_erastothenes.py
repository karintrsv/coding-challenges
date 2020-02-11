#
#  Just for fun
#
#  INPUT
#  Any positive integer less than 100001
#
#  GOAL
#  Implement Sieve of Erastothenes prime finder
#

import math
import numpy as np


def sieve(n):
    arr = np.arange(2, n + 1)
    for value in np.arange(2, n + 1):
        step = value
        if arr[step - 2] != -1:
            while True:
                step += value
                if step > n:
                    break
                arr[step - 2] = -1

    return list(filter(lambda x: x != -1, arr))


print(sieve(100000))
