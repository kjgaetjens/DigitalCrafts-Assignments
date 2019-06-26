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

#print factorial
def display_factorial(factorial):
    print(factorial)

#execute functions
number = input_num()
factorial = calc_factorial(number)
display_factorial(factorial)