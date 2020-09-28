/*let itemsList = {
  1: new Item(1, "Apple", 40),
  2: new Item(2, "Orange", 20),
  3: new Item(3, "Mango", 50),
  4: new Item(4, "Grapes", 100)
};
*/
function getSelectElement() {
  return document.getElementById("fruitsSelector");
}
function populateList() {
  console.log("populateList is called");
  for (var key in itemsList) {
    let newItem = itemsList[key];
    console.log(newItem.id, newItem.name);
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(newItem.name);
    newOption.appendChild(optionText);
    newOption.setAttribute("value", newItem.id);
    getSelectElement().appendChild(newOption);
  }
}

function remove(elem) {
  let id = elem.parentNode.firstElementChild.innerText;
  cart1.removeItem(id);
  console.log("inside removeItem to remove", id);
  document.getElementById("container").removeChild(elem.parentNode);
  // console.log(parent);
}
console.log("inside main.js");
populateList();
