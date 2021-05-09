input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    max_value = 0

    for item in array:
        if item <= 1 or max_value <= 1:
            max_value += item
        else:
            max_value *= item

    return max_value


result = find_max_plus_or_multiply(input)
print(result)