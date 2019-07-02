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


##add unit tests if I have time


from ShoppingList import ShoppingList
from GroceryItem import GroceryItem

#menus
def main_menu():
    if len(shopping_lists) >= 1:
        view_lists()
        user_selection = input("Enter \"v\" to view an existing shopping list or \"c\" to create a new shopping list: ").lower()
        if user_selection == "v":
            valid_indexes = [str(i) for i in range(len(shopping_lists))]
            selection = input("Select a list by entering the index of the list: ")
            while selection not in valid_indexes:
                selection = input("You have not entered a valid index. Enter a valid index or press \"m\" to return to main menu: ").lower()
                if selection == "m":
                    main_menu()
                    return
            selection = int(selection)
            selected_list = shopping_lists[selection]
            view_list_items(selected_list)
            shopping_list_menu()

        elif user_selection == "c":
            new_shopping_list()
            print("Your list has been created!")
            main_menu()
        elif user_selection == "q":
            exit
        else:
            print("You have not entered a valid input. Please enter a valid input or enter \"q\" to quit")
            main_menu()

    else:
        print("You don't have any shopping lists")
        user_selection = input("Enter \"c\" to create a new shopping list: ").lower()
        if user_selection == "c":
            new_shopping_list()
            print("Your list has been created!")
            main_menu()
        elif user_selection == "q":
            exit
        else: 
            print("You have not entered a valid input. Please enter a valid input or enter \"q\" to quit")
            main_menu()

def shopping_list_menu():
    user_selection = input("Would you like to add a new item to the list? Enter \"y\" for yes or \"n\" for no: ")
    if user_selection == "y":
        new_grocery_item()
        print("Your item has been added!")
        view_list_items(selected_list)
        shopping_list_menu()
    elif user_selection == "n":
        main_menu()


#shopping lists
def view_lists():
    print("Your Shopping Lists:")
    print("Index: - Shopping List:")
    for i in range(len(shopping_lists)):
        print(f"{i}      - {shopping_lists[i].title}")

def new_shopping_list():
    (list_title, list_address) = ShoppingList.intake_shopping_list()
    shopping_list = ShoppingList.create_shopping_list(list_title, list_address)
    shopping_lists.append(shopping_list)
    

#grocery items
def view_list_items(lst):
    print(f"Shopping List: {lst.title}")
    print("Item: - Quantity: - Price:")
    shopping_list = lst.contents
    for item in shopping_list:
        print(f"{item.title} - {item.quantity} - {item.price}")

def new_grocery_item():
    (item_title, item_quantity, item_price) = GroceryItem.intake_grocery_item()
    grocery_item = GroceryItem.create_grocery_item(item_title, item_quantity, item_price)
    selected_list.contents.append(grocery_item)
    


#execute
shopping_lists = []
selected_list = ShoppingList("","")
main_menu()
