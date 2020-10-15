
def num_digits(n):
    count = 0
    while n:
        count = count + 1
        n = n / 10
    return count