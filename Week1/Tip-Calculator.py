#Instructions
#In this assignment you are going to ask the user for #the two inputs as shown below: 
#- Enter the total amount 
#- Enter the tip percentage amount
#After the user has entered both inputs the application #calculates the tip amount and displays it to the user. 

def tip_calc(amount,percent):
  amount = float(amount)
  percent = float(percent)/100
  print(round(amount*percent,2))

total_amount = input("Enter the total amount: ")
tip_percentage = input("Enter the tip percentage amount: ")

tip_calc(total_amount, tip_percentage)

#review-notes: consider breaking tip-calculator into smaller functions to make each code block easier to re-use and make code updates cleaner. eg make input one function, make display tip one function. get in the habbit of adding comments to describe each functionality too.