// In this assignment you are going to test your knowledge of class composition. Your task is to create a class which represent a "Bank Account". The Bank Account will have the following properties. 

// Bank Account: 
// - First Name
// - Last Name
// - Middle Name
// - Account Type 
// - Balance 
// - Status (Opened/Closed/Freeze) 

// Here are the features that needs to be implement: 
// - A user should be able to open a bank account provided they have the initial balance of $100
// - User should be able to transfer money from one bank account to another  
// - A user should be able to withdraw money from the bank account 
// - The app should charge $-35 fees if the bank account is below $0

class BankAccount {
    constructor(firstName, lastName, accountType) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = ""
        this.accountType = accountType
        this.balance = 0.00
        this.status = ""
    }

    openAccount(initialBalance) {
        if (initialBalance >= 100) {
            this.status = "Opened"
            this.balance += initialBalance
            return "Congratulations! You have opened a bank account"
        } else {
            return "Sorry, you must have a minimum initial balance of $100 to open an account"
        }
    }

    transferMoney(amount, account) {
        this.balance -= amount
        account.balance += amount
        if (this.balance < 0) {
            this.balance -= 35
        }
        return `You have transfered $${amount} to ${account}`
    }

    withdrawMoney(amount) {
        this.balance -= amount
        if (this.balance < 0) {
            this.balance -= 35
        }
        return `You have withdrawn $${amount}`
    }
}

let bankAccount = new BankAccount("Kelsey","Gaetjens","Savings")
let bankAccount2 = new BankAccount("Kelsey", "Gaetjens", "Checking")