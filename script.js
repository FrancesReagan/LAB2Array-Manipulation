//Create an empty array to store our shopping List//
let shoppingList = [];

//Function to add a new item to our shopping List//
function addItem(item) {
  shoppingList.push(item);
  console.log(item + " has been added to the shopping list!");
}

//Function to remove the Last item from our shopping List
function removeLastItem() {
  //Check if the list is not empty before removing//
  if (shoppingList.length > 0) {
    let removed = shoppingList.pop();
    console.log(removed + " has been removed from the shopping list!");
  } else {
    console.log("Shopping list is already empty!");
  }
}