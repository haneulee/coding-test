
input = [3, 5, 6, 1, 2, 4]

def find_max_num(array):
    max_num = array[0]
    for item in array:
        if item > max_num:
            max_num = item

    return max_num

result = find_max_num(input)
print(result)