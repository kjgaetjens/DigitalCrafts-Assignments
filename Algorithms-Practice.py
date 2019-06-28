# Assignment: Write a program which will remove duplicates from the array. 
# Example: 
# names = ["Alex","John","Mary","Steve","John", "Steve"]
# After the duplicates are removed it should be 
# names = ["Alex","John","Mary","Steve"]

def removeDuplicates(lst):
    for i in range(len(lst)-1, -1, -1):
        item = lst[i]
        for r in range(i-1, -1, -1):
            if item == lst[r]:
                del lst[i]
                break
    return lst

test_list = ["Alex","John","Mary","Steve","John", "Steve"]
print(removeDuplicates(test_list))

 
# Assignment: Write a program which finds the largest element in the array 

def findMax(lst):
    max = 0
    for i in lst:
        if i > max:
            max = i
    return max

test_list_nums = [1, 2.4, 6, 2, 6, 5, 6.3, -1, -7]
print(findMax(test_list_nums))


# Assigmment: Write a program which finds the smallest element in the array

# Assignment: Assume you're suppose tp have an array of 10 integers from 0-9. One number is missing. Write a function that will determine the missing element.

# Assignment: given an array [1,2,3,4,5] write a function that duplicates the array ([1,2,3,4,5,1,2,3,4,5]), you may modify or create a new array.

# HARD Assignment - Write a program to display a pyramid as shown below:
#    *
#   ***
#  *****
# *******