#Write an app which separatly takes first name and last name of the user. Once the name is taken print out the following message: 
#Hello, My name is FirstName, LastName

def greet(first_name,last_name):
  print(f"Hello, My name is {first_name} {last_name}")

first_name = (input('Please enter your first name: ')).capitalize()
last_name = (input('Please enter your last name: ')).capitalize()

greet(first_name, last_name)