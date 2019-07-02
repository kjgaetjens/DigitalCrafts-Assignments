#Assignment 1 - Write an app which asks users for the input and then prints the factorial for that number.

#prompt user to input number until user inputs positive whole number or quits
def input_num():
    num = input("Enter a positive integer: ")
    while num.isdigit() != True:
        num = input("You did not enter a integer. Please enter a positive integer (eg. 2, 16, etc) or press 'q' to quit: ")
        if num == "q":
            exit()
    num = int(num)
    return num

#calculate factorial
def calc_factorial(number):
    factorial = number
    while number > 1:
        factorial = factorial * (number - 1)
        number -= 1
    return factorial

#another approach from the review session
#for index in range(0,number+1):
#   factorial = 1
#   factorial *= index
#   return factorial
# or
#for index in range(number,0,-1):
#   factorial = 1
#   factorial *= index
#   return factorial

#another approach from the exception session
# try:
#     #move the variable declaration here
#     #move calc_factorial() here
# else#Error:
#     #do the error while loop i did in input_num
#     #variable declaration here
#     #run calc_factorial() again

#print factorial
def display_factorial(factorial):
    print(factorial)

#execute functions
number = input_num()
factorial = calc_factorial(number)
display_factorial(factorial)