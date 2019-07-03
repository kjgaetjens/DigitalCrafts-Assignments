# You have just been hired by University of Houston as a developer. Your first task is to create a pool table management app which will manage the pool tables in University Center Games Room. 

# Here are the requested features: 
# DONE - As an admin you should be able to see all the tables (12) 
# DONE - As an admin each table in the list should show, whether the table is OCCUPIED or NOT OCCUPIED. 
# DONE - As an admin if the table is OCCUPIED then show the start time of the table, number of minutes played. (Hardmode - If the minutes are > 60 then show them in terms of hours) 
# - As an admin you can only give out the tables that are NOT OCCUPIED. This means if pool table 8 is occupied and you try to give it out then the app will print a message saying "Pool Table 8 is currently occupied". 
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

#do i want the file to keep track of current and use it to pull table info for view, etc?
##maybe move all my functions into the class - like check in and check out


import json
from datetime import datetime
from PoolTable import PoolTable


def create_initial_tables(numberOfTables):
    for i in range(numberOfTables):
        pool_table = PoolTable(i+1,False)
        tables.append(pool_table)

def menu():
    print("Main Menu")
    print("1) View Status of All Tables")
    print("2) Check-out a Table")
    print("3) Check-in a Table")
    print("")

def menu_select(): 
    menu()
    user_input = input("Enter the number for your menu selection: ")
    print("")
    if user_input == "q":
        exit()
    elif user_input == "1":
        view_all_tables()
        return_to_menu()
    elif user_input == "2":
        table_select()
        if check_if_occupied() == False:
            check_out_table(selected_table_num)
        return_to_menu()
    elif user_input == "3":
        table_select()
        check_in_table(selected_table_num)
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
        exit()
    elif user_input == "q":
        exit() 
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
def table_select():
    valid_table_nums = [i+1 for i in range(len(tables))]
    selected_table_num = input("Enter the table you would like to check-in or check-out: ")
    try:
        selected_table_num = int(selected_table_num)
        if selected_table_num not in valid_table_nums:
            view_all_tables()
            print("You have not entered a valid table number. Please make sure the number you select is an actual table number")
            table_select()
    except ValueError:
        if selected_table_num == "q":
            exit()
        else:
            view_all_tables()
            print("You have not entered a valid value. Please enter a number.")
            table_select()

#check if occupied
def check_if_occupied():
    selected_table = tables[int(selected_table_num) - 1]
    if selected_table.is_occupied == True:
        print(f"Table {selected_table_num} is already checked-out")
        print("")
        return True
    elif selected_table.is_occupied == False:
        return False

#check-out table
def check_out_table(selected_table_num):
    selected_table = tables[int(selected_table_num) - 1]
    #selected_table.start_time = datetime.now()
    selected_table.start_time = datetime(2019,7,3,11,30)
    selected_table.is_occupied = True
    print(f"You have checked-out Table {selected_table_num} at {selected_table.start_time}")
    print("")

#check-in table
def check_in_table(selected_table_num):
    selected_table = tables[int(selected_table_num) - 1]
    selected_table.end_time = datetime.now()
    selected_table.total_time = selected_table.end_time - selected_table.start_time
    selected_table.isoccupied = False
    print(f"You have checked-in Table {selected_table_num} at {selected_table.end_time}")
    #send to file

tables = []
create_initial_tables(5)
selected_table_num = ""
#check_out_table(selected_table_num)
# check_in_table(selected_table_num)
# print(tables[7].start_time, tables[7].end_time, tables[7].total_time, tables[7].is_occupied)
#view_all_tables()
menu_select()


##built out adding it to the receipt