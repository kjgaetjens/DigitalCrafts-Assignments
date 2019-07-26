/*
Create a grocery list app which allows you to add different categories as well as grocery items related to grocery category. Here are list of requested features. 
* User should be able to add the grocery category 
* User should be able to add grocery items to a particular category
* User should be able to view the grocery items based on the grocery category
* User should be able to remove items from the grocery list 
* Items must be stored in Firebase database 

HARDMODE: 
- Allow users to signup for the app
- Allow users to login to the app
- Allow users to add the grocery categories and items based on their user id. 
- Users should be able to view only their grocery categories and grocery items once they login to the app
*/


//convert categories to classes
    //-include name, address, and then grocery array in class
//add groceries to the store


/*
add home button to category.html
create another javascript file and update category.html file with that reference
*/



//declare variables
let groceryCatRef = database.ref('categories')

const addCat = (name, address) => {
    groceryCatRef.push({
        name: name,
        address: address,
        groceries: [] //this doesn't actually do anything
    })
}

const deleteCat = (id) => {
    groceryCatRef.child(id).remove()
}

const navToCat = (catId) => {
    window.location.href = `category.html?${catId}`
}