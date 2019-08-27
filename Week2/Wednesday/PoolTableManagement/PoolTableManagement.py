# You have just been hired by University of Houston as a developer. Your first task is to create a pool table management app which will manage the pool tables in University Center Games Room. 

# Here are the requested features: 
# DONE - As an admin you should be able to see all the tables (12) 
# DONE - As an admin each table in the list should show, whether the table is OCCUPIED or NOT OCCUPIED. 
# DONE - As an admin if the table is OCCUPIED then show the start time of the table, number of minutes played. (Hardmode - If the minutes are > 60 then show them in terms of hours) 
# DONE - As an admin you can only give out the tables that are NOT OCCUPIED. This means if pool table 8 is occupied and you try to give it out then the app will print a message saying "Pool Table 8 is currently occupied". 
# - As an admin whenever I close the table it should write an entry in the text file / json file. The file should be named in the following format: (11-22-2017.txt or 11-22-2017.json) keeping track of all the tables. The entry can consists of the following information: 
# _________________________________________

# Pool Table Number 
# Start Date Time
# End Date Time 
# Total Time Played 
# Cost (if you are doing the hard mode) 
# ___________________________________________

# HARD MODE - Associate dollar amount for time played on the pool table. $30 per hour. 
# MORE HARD MODE - Write Unit Tests for your application
# EXTREMELY HARD MODE: Add the ability to email the final report (file) to an email address. 



## Need to move more of my functions to separate files where it makes sense.


import json
from datetime import datetime
from PoolTable import PoolTable
from PoolTable import from_dictionary_quit
from os import path


def create_json_log_if_needed():
    if path.exists(current_date_path) == True:
        pass
    elif path.exists(current_date_path) == False:
        with open(current_date_path,"w") as file_object:
            json.dump([], file_object)

def create_initial_tables(numberOfTables):
    for i in range(numberOfTables):
        pool_table = PoolTable(i+1,False)
        tables.append(pool_table)

def quit_application():
    table_statuses = []
    for table in tables:
        table_statuses.append(table.to_dictionary_quit())
    with open("table_status.json","w") as file_object:
           json.dump(table_statuses, file_object)
    exit()

def load_statuses():
    if path.exists("table_status.json") == True:
        with open("table_status.json") as file_object: 
            table_dictionaries = json.load(file_object)
        table_classes = [from_dictionary_quit(table) for table in table_dictionaries]
        for table in table_classes:
            tables.append(table)
    elif path.exists("table_status.json") == False:
        with open("table_status.json","w") as file_object:
            json.dump([], file_object)
        create_initial_tables(12) #move the parameter for this

def menu():
    print("Main Menu")
    print("1) View Status of All Tables")
    print("2) Check-out a Table")
    print("3) Check-in a Table")
    print("4) Exit program")
    print("")

def menu_select(): 
    menu()
    user_input = input("Enter the number for your menu selection: ")
    print("")
    if user_input == "q" or user_input == "4":
        quit_application()
    elif user_input == "1":
        view_all_tables()
        return_to_menu()
    elif user_input == "2":
        selected_table_num = table_select()
        if check_if_occupied(selected_table_num) == False:
            check_out_table(selected_table_num)
        else:
            print(f"Table {selected_table_num} is already checked-out")
            print("")
        return_to_menu()
    elif user_input == "3":
        selected_table_num = table_select()
        if check_if_occupied(selected_table_num) == True:
            check_in_table(selected_table_num)
            add_to_log(selected_table_num)
        else:
            print(f"Table {selected_table_num} is already checked-in")
            print("")
        return_to_menu()
    else:
        print("You did not enter a valid selection. Please enter a valid selection or press \"q\" to quit")
        print("")
        menu_select()

def return_to_menu():
    user_input = input("Return to main menu? (y/n): ")
    if user_input == "y":
        print("")
        menu_select()
    elif user_input == "n":
        quit_application()
    elif user_input == "q":
        quit_application()
    else:
        return_to_menu()

#view all tables
def view_all_tables():
    print("Status of All Tables:\n")
    for table in tables:
        if table.is_occupied == False:
            print(f"Number: {table.number} \nStatus: {table.is_occupied} \n")
        elif table.is_occupied == True:
            time_played =""
            time_played_min = int((datetime.now() - table.start_time).total_seconds()/60)
            if time_played_min >= 60:
                time_played_hour = int(time_played_min/60)
                time_played_min_remainder = time_played_min%60
                time_played = f"{time_played_hour} hour(s) {time_played_min_remainder} minute(s)"
            elif time_played_min < 60:
                time_played = f"{time_played_min} minute(s)"
            print (f"Number: {table.number} \nStatus: {table.is_occupied} \nStart Time: {table.start_time} \nTime Played: {time_played}\n")

#select a table
def table_select_input():
    selected_table_input = ""
    selected_table_num = -1
    while selected_table_num == -1:
        selected_table_input = input("Enter the table you would like to check-in or check-out: ")
        if selected_table_input == "q":
            quit_application()
        else:
            try:
                selected_table_num = int(selected_table_input)
            except ValueError:
                print("You have not entered a valid value. Please enter a number or press \"q\" to quit.")
    return selected_table_num

def table_select():
    valid_table_nums = [i+1 for i in range(len(tables))]
    selected_table_num = table_select_input()
    while selected_table_num not in valid_table_nums:
        view_all_tables()
        print("You have not entered a valid table number. Please make sure the number you select is an actual table number")
        selected_table_num = table_select_input()
    return selected_table_num

#check if occupied
def check_if_occupied(selected_table_num):
    selected_table = tables[int(selected_table_num) - 1]
    if selected_table.is_occupied == True:
        return True
    elif selected_table.is_occupied == False:
        return False

#check-out table
def check_out_table(selected_table_num):
    selected_table = tables[int(selected_table_num) - 1]
    selected_table.start_time = datetime.now()
    selected_table.is_occupied = True
    print(f"You have checked-out Table {selected_table_num} at {selected_table.start_time}")
    print("")

#check-in table
def check_in_table(selected_table_num):
    selected_table = tables[int(selected_table_num) - 1]
    selected_table.end_time = datetime.now()
    selected_table.total_time = int((selected_table.end_time - selected_table.start_time).total_seconds()/60)
    selected_table.is_occupied = False
    print(f"You have checked-in Table {selected_table_num} at {selected_table.end_time}")
    #send to file

def add_to_log(selected_table_num):
    with open(current_date_path) as file_object: 
        table_logs = json.load(file_object)
    selected_table = tables[int(selected_table_num) -1]
    table_logs.append(selected_table.to_dictionary())
    with open(current_date_path,"w") as file_object: 
        json.dump(table_logs,file_object)

tables = []
current_date = datetime.strftime(datetime.now(), "%m-%d-%Y")
current_date_path = f"{current_date}.json"
load_statuses()
create_json_log_if_needed()
menu_select()
