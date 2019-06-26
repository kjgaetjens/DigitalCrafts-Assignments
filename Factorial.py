#Assignment 1 - Write an app which asks users for the input and then prints the factorial for that number.

#prompt user to input number until user inputs positive whole number or quits
def input_num():
    number = input("Enter a positive whole number: ")
    while number.isdigit() != True:
        number = input("You did not enter a positive whole number. Please enter a positive whole number (eg. 2, 16, etc) or press 'q' to quit: ")
        if number == "q":
            exit()
    number = int(number)
    return number

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
factorial = calc_factorial(input_num())
display_factorial(factorial)