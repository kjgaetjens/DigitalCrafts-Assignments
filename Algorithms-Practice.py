# Assignment: Write a program which will remove duplicates from the array. 
# Example: 
# names = ["Alex","John","Mary","Steve","John", "Steve"]
# After the duplicates are removed it should be 
# names = ["Alex","John","Mary","Steve"]

def remove_duplicates(lst):
    for i in range(len(lst)-1, -1, -1):
        item = lst[i]
        for r in range(i-1, -1, -1):
            if item == lst[r]:
                del lst[i]
                break
    return lst

test_list = ["Alex","John","Mary","Steve","John", "Steve"]
print(remove_duplicates(test_list))

 
# Assignment: Write a program which finds the largest element in the array 

def find_max(lst):
    max = lst[0]
    for i in lst:
        if i > max:
            max = i
    return max

test_list_nums = [1, 2.4, 6, 2, 6, 5, 6.3, -1, -7]
print(find_max(test_list_nums))


# Assigmment: Write a program which finds the smallest element in the array

def find_min(lst):
    min = lst[0]
    for i in lst:
        if i < min:
            min = i
    return min

test_list_nums = [1, 2.4, 6, 2, 6, 5, 6.3, -1, -7]
print(find_min(test_list_nums))


# Assignment: Assume you're supposed to have an array of 10 integers from 0-9. One number is missing. Write a function that will determine the missing element.

def missing_num(lst):
    for i in range(10):
        in_list = False
        for item in lst:
            if item == i:
                in_list = True
                break
        if in_list == False:
            return i

array_of_ten = [0, 1, 2, 3, 4, 5, 7, 8, 9]
print(missing_num(array_of_ten))


# Assignment: given an array [1,2,3,4,5] write a function that duplicates the array ([1,2,3,4,5,1,2,3,4,5]), you may modify or create a new array.

def dupe_list(lst):
    duplicated_list = lst + lst
    return duplicated_list

test_list = [1,1,2,4,6]
print(dupe_list(test_list))


# HARD Assignment - Write a program to display a pyramid as shown below:
#    * 1    4
#   *** 3   3
#  ***** 5  2
# ******* 7 1

def pyramid(character,lines):
    num_char = 1
    space = " "
    num_space = lines
    while num_space > 0:
        print(f"{space*num_space}{character*num_char}{space*num_space}")
        num_char += 2
        num_space -= 1

pyramid("*",4)
