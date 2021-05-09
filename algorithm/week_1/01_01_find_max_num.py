
input = [3, 5, 6, 1, 2, 4]

def find_max_num(array):

    for item in array:
        for compare_item in array:
            if item < compare_item:
                break
        else:
            return item


result = find_max_num(input)
print(result)