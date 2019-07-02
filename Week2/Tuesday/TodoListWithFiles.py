# In this assignment you are going to create a TODO app which saves the list into a file. When the app starts it should present user with the following menu: 
# Press 1 to add task 
# Press 2 to delete task 
# Press 3 to view all tasks 
# Press q to quit 
# The user should only be allowed to quit when they press 'q'. 

# Add Task: 
# Ask the user for the 'title' and 'priority' of the task. Priority can be high, medium and low. 

# Delete Task: 
# Show user all the tasks along with the index number of each task. User can then enter the index number of the task to delete the task. 

# View all tasks
# Allow the user to view all the tasks in the following format: 
# 1 - Wash the car - high 
# 2 - Mow the lawn - low 

# * Store each task in a dictionary and use 'title' and 'priority' as keys of the dictionary. 
# * Store each dictionary inside an array. Array will represent list of tasks.  

import json
from os import path


def create_json_if_needed():
    if path.exists("todo_list.json") == True:
        pass
    elif path.exists("todo_list.json") == False:
        with open("todo_list.json","w") as todo_list_file:
            json.dump([], todo_list_file)

#menu
def display_menu():
    menu_selected = input("""
Menu
Press 1 to add task 
Press 2 to delete task 
Press 3 to view all tasks 
Press q to quit

Enter your menu selection: """
    ).lower()
    if menu_selected == "1":
        enter_task_input()
    elif menu_selected == "2":
        select_delete_index()
    elif menu_selected == "3":
        view_tasks()
    elif menu_selected == "q":
        exit
    else:
        print("Please select a valid menu option")
        display_menu()

def return_to_menu():
    yes_or_no = ""
    while yes_or_no != "y" and yes_or_no != "n":
        yes_or_no = input("Return to main menu? (y/n): ").lower()
    if yes_or_no == "y":
        display_menu()
    elif yes_or_no == "n":
        exit

#add task
def enter_task_input():
    print("Add Task")
    valid_priorities = ["low", "medium", "high"]
    title_input = input("Enter a task: ")
    priority_input = input(f"Enter a priority for {title_input}. Your priority can be \"low\", \"medium\", or \"high\": ").lower()
    while priority_input not in valid_priorities and priority_input != "m":
        priority_input = input("You have not entered a valid priority. Enter \"low\", \"medium\", or \"high\" or press \"m\" to return to the main menu: ").lower()
        if priority_input == "m":
            display_menu()
            return
    add_task(title_input,priority_input)

def add_task(title, priority):
    todo_list = []
    with open("todo_list.json") as todo_list_file:
        todo_list = json.load(todo_list_file)
    task = {
        "title": title,
        "priority": priority
    }
    todo_list.append(task)
    with open("todo_list.json","w") as todo_list_file:
        json.dump(todo_list, todo_list_file)
    print("Your task has been added!")
    add_another_task()

def add_another_task():
    yes_or_no = ""
    while yes_or_no != "y" and yes_or_no != "n":
        yes_or_no = input("Would you like to add another task? (y/n): ").lower()
    if yes_or_no == "y":
        enter_task_input()
    if yes_or_no == "n":
        return_to_menu()

#delete task
def select_delete_index():
    print("Delete Task")
    print("Index: - Task: - Priority: ")
    todo_list = []
    with open("todo_list.json") as todo_list_file:
        todo_list = json.load(todo_list_file)
    for i in range(len(todo_list)):
        i_title = todo_list[i]["title"]
        i_priority = todo_list[i]["priority"]
        print(f"{i} - {i_title} - {i_priority}")
    valid_indexes = [str(i) for i in range(len(todo_list))]
    selected_index = input("Enter the index for the task you would like to delete: ").lower()
    while selected_index not in valid_indexes:
        selected_index = input("You have not entered a valid index. Enter a valid index or press \"m\" to return to the main menu: ").lower()
        if selected_index == "m":
            display_menu()
            return
    selected_index = int(selected_index)
    delete_task(selected_index)

def delete_task(selected_index):
    todo_list = []
    with open("todo_list.json") as todo_list_file:
        todo_list = json.load(todo_list_file)
    del todo_list[selected_index]
    with open("todo_list.json","w") as todo_list_file:
        json.dump(todo_list, todo_list_file)
    print("Your task has been deleted!")
    delete_another_task()

def delete_another_task():
    yes_or_no = ""
    while yes_or_no != "y" and yes_or_no != "n":
        yes_or_no = input("Would you like to delete another task? (y/n): ").lower()
    if yes_or_no == "y":
        select_delete_index()
    if yes_or_no == "n":
        return_to_menu()

#view tasks
def view_tasks():
    todo_list = []
    print("View Tasks")
    print("Index: - Task: - Priority: ")
    with open("todo_list.json") as todo_list_file:
        todo_list = json.load(todo_list_file)
    for i in range(len(todo_list)):
        i_title = todo_list[i]["title"]
        i_priority = todo_list[i]["priority"]
        print(f"{i} - {i_title} - {i_priority}")
    return_to_menu()

#execute
create_json_if_needed()
display_menu()
