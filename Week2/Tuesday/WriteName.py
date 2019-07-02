# 1) Write a program that prompts the user for their name. When they respond, write their name to a file called guest.txt. 
# 2) Write a while loop that asks people why they like programming. Each time someone enters a reason, add their reason to a file that stores all the responses. 

#1
def whats_your_name():
    name = input("What's your name? ")
    return name

with open("guest.txt", "w") as guests:
    guest = whats_your_name()
    guest_list = guests.write(guest)

#2
def why_you_like_programming():
    reason = input("Why do you like programming? ")
    return reason

with open("reasons.txt", "a") as reasons:
    reason = " "
    while reason != "":
        reason = why_you_like_programming()
        reason_list = reasons.write(reason + "\n")