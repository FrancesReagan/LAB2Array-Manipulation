//Create an empty array to store our shopping List//
let shoppingList = [];

//Get references to html elements//
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const shoppingListDisplay = document.getElementById("shoppingListDisplay");

//Function to add an item to the shopping list//
function addItem() {
  //Get the item text from the input field//
  const newItem = itemInput.ariaValueMax.trim();

  //Check if input is not empty
  if (newItem === "") {
    alert("Please enter an item!");
    return;
  }

  //Check if item already exists in the list (case-sensitive)//
  const itemExists = shoppingList.some(item =>
    item.toLowerCase() === newItem.toLowerCase()
  );
if (itemExists) {
  alert(newItem + " is already in your shopping list!");
} else {
  //add the item to my array//
  shoppingList.push(newItem);

  //clear the input field//
  itemInput.value = "";

  //update the displayed list//
  updateDisplayedList();
}
}

//Function to remove the last item//
function removeLastItem() {
  if (shoppingList.length > 0) {
    //Remove the last item from the array//
    const removedItem = shoppingList.pop();

    //update the displayed list//
    updateDisplayedList();

    //show a message about the removed item//
    alert(removedItem + " has been removed from the list!");
  } else {
    alert("Your shopping list is already empty!");
  }

//Functin to update the displayed list in the html//
function updateDisplayedList() {
  //clear the list display//
  shoppingListDisplay.innerHTML = "";

  //if the list is empty, show a message//
  if (shoppingList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your shopping list is empty!";
    emptyMessage.className = "message";
    shoppingListDisplay.appendChild(emptyMessage);
  } else {
    //Create a list item for each item in the array//
    shoppingList.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      shoppingListDisplay.append(listItem);
    });
  }
}

//Add event listeners to buttons//
addButton.addEventListener("click", addItem);

//Allow pressing enter in the input field to add item//
itemInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItem();
  }
});

removeButton.addEventListener("click", removeLastItem);

//initalize the displayed list//
updateDisplayedList();

// ---------old code from just task 1 and 2------

// //Modified function to add a new item only if it's not already in the shopping List//
// function addItem(item) {
//   //check if the item is already in the list//
//   if (shoppingList.includes(item)) {

//   console.log(item + " is already in your shopping list!");
// } else {
//   //if not in the list, add it//
//   shoppingList.push(item);
//   console.log(item + " has been added to the shopping list!");
// }
// }

// //Function to remove the Last item from our shopping List
// function removeLastItem() {
//   //Check if the list is not empty before removing//
//   if (shoppingList.length > 0) {
//     let removed = shoppingList.pop();
//     console.log(removed + " has been removed from the shopping list!");
//   } else {
//     console.log("Shopping list is already empty!");
//   }
// }

// //Function to show all items in our shopping List//
// function displayList() {
//   console.log("Shopping List:");

// //if the list is empty, show a message//
// if (shoppingList.length === 0) {
//   console.log("Your shopping list is empty!");
// }
// //otherwise, show each item with its position number//
// else {
//   for (let i = 0; i < shoppingList.length; i++) {
//     console.log((i + 1) + " . " + shoppingList[i]);
//   }
// }
// }

// //New function to find items containing a search term
// function filterItems(searchTerm) {
//   //convert search term to lowercase for case-insensitive comparsions//
//   let lowerSearchTerm = searchTerm.toLowerCase();

//   //use filter to find items that contain the search term
//   let matchingItems = shoppingList.filter(function(item) {
//     //Convert each item to lowercase and check if it contains the search term//
//     return item.toLowerCase().includes(lowerSearchTerm);
//   });
//   //Return the array of matching items//
//   return matchingItems;
// }