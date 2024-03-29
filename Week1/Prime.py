#Assignment 3: Take input from the user and find out if that number is prime or not.

#divisors to test number against
divisors = [2, 3, 5, 7]

#prompt user to input number until user inputs positive whole number or quits
def input_num():
    num = input("Enter a positive integer: ")
    while num.isdigit() != True:
        num = input("You did not enter a positive integer. Please enter a positive integer (eg. 2, 16, etc) or press 'q' to quit: ")
        if num == "q":
            exit()
    num = int(num)
    return num

#another approach from the review session
# is_prime = True
# for index in range(2,number):
#     if number % index == 0:
#         is_prime = False
#         break
# if is_prime:
#     print("PRIME")
# else:
#     print("NOT PRIME")

#determine if number is prime
def determine_is_prime(number):
    if number in divisors:
        return True
    else:
        for divisor in divisors:
            if number % divisor == 0:
                return False
        return True

#print result to user
def display_is_prime(is_prime):
    if is_prime == True:
        print(f"{number} is a prime number :) ")
    elif is_prime == False:
        print(f"{number} is not a prime number :(")

#execute functions
number = input_num()
is_prime = determine_is_prime(number)
display_is_prime(is_prime)