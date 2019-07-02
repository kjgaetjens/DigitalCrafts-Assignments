class ShoppingList:
    def __init__(self, title, address = ""):
        self.title = title
        self.address = address
        self.contents = []

    @staticmethod
    def intake_shopping_list():
        shopping_list_title = input("Enter a name for your shopping list: ")
        shopping_list_address = input("Enter an address for your shopping list or press \"Enter\" to continue: ")
        print(shopping_list_address)
        return (shopping_list_title, shopping_list_address)

    @staticmethod
    def create_shopping_list(title, address):
        print(address)
        shopping_list = ShoppingList(title, address)
        return shopping_list