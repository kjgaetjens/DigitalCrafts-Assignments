# You are responsible for creating an app that manages groceries. Your groceries are characterized by Shopping Lists which can contain grocery items. Here are the features you need to implement: 
# - You need to ask the user for the input. 
# - A user should be able to create a shopping list. A shopping list consists of a title and address. Example = Fiesta, Walmart, Sams Club, Cosco, Randalls etc 
# - A user should be able to add multiple shoppings lists 
# - Give user an option to display the list 
# - A user should be able to add a grocery items to a particular shopping list. A grocery item consists of a title, price, and quantity. Example Milk, Cookies, Paper, Napkins, Soda, Chips etc 

# Fiesta
# Milk, Soda, Fish

# Walmart
# Paper, Napkins, Plate, Chips

# Sams Club 
# Chicken, Beef, Eggs, Sugar, Salt, Pepper, Honey 

#need a class called Shopping List (with title and address) and a class called Grocery Item (with title and price and quantity)
#try to split into different files and include unittests if have time



##will need to move this shopping list to another file and will need to use this file to make a list of the shopping lists
#maybe throw in some try/catch for the type errors


##will need to add menu validation for each step

from ShoppingList import ShoppingList
from GroceryItem import GroceryItem


shopping_lists = []

def add_list_to_lists(lst): #needs to take in a list from "create list" in the shopping-list module
    shopping_lists.append(lst)

def add_item_to_list(lst, item): #needs to take in list from menu and "create item" in the grocery-list module
    lst.contents.append(item) #is this the right format? i feel like you need something else to call the list

#view all lists
def view_lists():
    print("Your Shopping Lists:")
    print("Index: - Shopping List:")
    for i in range(len(shopping_lists)):
        print(f"{i}      - {shopping_lists[i].title}")
    
#view all items in list
def view_list_items(lst):
    print(f"Shopping List: {lst.title}")
    print("Item: - Quantity: - Price:")
    shopping_list = lst.contents
    for item in shopping_list:
        print(f"{item.title} - {item.quantity} - {item.price}")

#add an item to a list (show all lists + ask which list, input for item)
def intake_select_list():
    selection = int(input("Enter the index of the list you want to add item(s) to: "))
    selected_list = shopping_lists[selection]
    return selected_list

def new_shopping_list():
    (list_title, list_address) = ShoppingList.intake_shopping_list()
    shopping_list = ShoppingList.create_shopping_list(list_title, list_address)
    add_list_to_lists(shopping_list)

###create while loop with quit
def main_menu():
    if len(shopping_lists) >= 1:
        view_lists()
        user_selection = input("Enter \"v\" to view an existing shopping list or \"c\" to create a new shopping list: ").lower()
        if user_selection == "v":
            selected_list = intake_select_list()
            view_list_items(selected_list)
            shopping_list_menu()

        elif user_selection == "c":
            new_shopping_list()
            print("Your list has been created!")
            main_menu()

    else:
        print("You don't have any shopping lists")
        user_selection = input("Enter \"c\" to create a new shopping list: ").lower()
        if user_selection == "c":
            new_shopping_list()
            print("Your list has been created!")
            main_menu()

def shopping_list_menu():
    user_selection = input("Would you like to add a new item to the list? Enter \"y\" for yes or \"n\" for no: ")
    if user_selection == "y":
        (item_title, item_quantity, item_price) = GroceryItem.intake_grocery_item()
        grocery_item = GroceryItem.create_grocery_item(item_title, item_quantity, item_price)
        add_item_to_list(selected_list,grocery_item)
        print("Your item has been added!")
        view_list_items(selected_list)
        shopping_list_menu()
    elif user_selection == "n":
        main_menu()

selected_list = ShoppingList("","")
main_menu()
