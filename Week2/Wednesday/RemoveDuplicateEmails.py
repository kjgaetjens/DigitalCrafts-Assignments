#In this assignment you are going to read a file which consists of lots of emails. Some of the emails occurs more than once and we don't want to send those customers duplicate emails. 
#Your task is to read the emails file and then remove all the duplicates and then store the *duplicate free* email list into a separate file called "duplicate-free-email-list.txt". 

file_name = "emails.txt"
with open(file_name) as email_file:
    contents = email_file.read()
remove_line_break = contents.replace("\n", "")
split_email_test = remove_line_break.split(",")
stripped_emails = []
for email in split_email_test:
    email = email.strip()
    stripped_emails.append(email)
duplicate_free_emails = []
for email in stripped_emails:
    if email not in duplicate_free_emails:
        duplicate_free_emails.append(email)
duplicate_free_emails_string = ", ".join(duplicate_free_emails)
with open("duplicate-free-email-list.txt", "w") as nodupe_email_file:
    nodupe_email_file.write(duplicate_free_emails_string)

