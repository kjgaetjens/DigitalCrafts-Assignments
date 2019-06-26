# Assignment 2: Create an app which detects if the input word is a palindrome or not. 

# Palindromes are strings which when read from left to right are same as right to left. Examples below: 
# mom 
# dad 
# madam 

# The following strings are NOT palindrome: 
# cat != tac 
# car != rac 
# bus = sub 

#prompt user to input string
def input_string():
    original_string = input("Enter a word: ")
    return original_string

#reverse the string
def reverse_string(word):
    letters = list(word.lower())
    reversed_letters = [letters[index] for index in range(len(letters)-1, -1, -1)]
    return (letters, reversed_letters)

#determine if string equals reverse string (eg palindrome)
def determine_is_palindrome(letters, reversed_letters):
    if letters == reversed_letters:
        return True
    else:
        return False

#print result to user
def display_is_palindrome(is_palindrome):
    if is_palindrome == True:
        print(f"{word} is a palindrome :) ")
    elif is_palindrome == False:
        print(f"{word} is not a palindrome :(")
    
#execute functions
word = input_string()
letters, reversed_letters = reverse_string(word)
is_palindrome = determine_is_palindrome(letters, reversed_letters)
display_is_palindrome(is_palindrome)


