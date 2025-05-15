//Create an empty array to store our shopping List//
let shoppingList = [];

//Modified function to add a new item only if it's not already in the shopping List//
function addItem(item) {
  //check if the item is already in the list//
  if (shoppingList.includes(item)) {

  console.log(item + " is already in your shopping list!");
} else {
  //if not in the list, add it//
  shoppingList.push(item);
  console.log(item + " has been added to the shopping list!");
}
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

//Function to show all items in our shopping List//
function displayList() {
  console.log("Shopping List:");

//if the list is empty, show a message//
if (shoppingList.length === 0) {
  console.log("Your shopping list is empty!");
}
//otherwise, show each item with its position number//
else {
  for (let i = 0; i < shoppingList.length; i++) {
    console.log((i + 1) + " . " + shoppingList[i]);
  }
}
}

//New function to find items containing a search term
function filterItems(searchTerm) {
  //convert search term to lowercase for case-insensitive comparsions//
  let lowerSearchTerm = searchTerm.toLowerCase();

  //use filter to find items that contain the search term
  let matchingItems = shoppingList.filter(function(item) {
    //Convert each item to lowercase and check if it contains the search term//
    return item.toLowerCase().includes(lowerSearchTerm);
  });
  //Return the array of matching items//
  return matchingItems;
}