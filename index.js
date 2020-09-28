let itemsList = {
  1: new Item(1, "Apple", 40),
  2: new Item(2, "Orange", 20),
  3: new Item(3, "Mango", 50),
  4: new Item(4, "Grapes", 100)
};

function ShoppingCart() {
  let totalCost = 0;
  let items = {};
  let cartSize = 0;
  let createItem = function (_name, _price, _quantity = 1) {
    return {
      name: _name,
      price: _price,
      quantity: _quantity
    };
  };
  Object.defineProperty(this, "cartSize", {
    get: function () {
      return cartSize;
    }
  });
  this.printList = function () {
    for (let key in items) {
      console.log(key, items[key].name, items[key].price);
    }
  };
  this.getTotalCost = function () {
    return totalCost;
  };
  this.addItem = function (id, name, price) {
    if (cartSize === 3) {
      console.log(
        "Cannot insert as cart is already full with",
        cartSize,
        "items"
      );
      return;
    }
    if (!(id in items)) {
      //if new item
      console.log("Adding new item to cart");
      items[id] = createItem(name, price);
    }
    items[id].quantity += 1;
    totalCost += price;
    console.log(totalCost);
    cartSize++;
  };
  this.removeItem = function (id) {
    if (cartSize === 0) {
      console.log("Cart is empty");
      return;
    }
    totalCost -= items[id].price;
    cartSize--;
    delete items[id];
  };
  this.checkout = function () {
    console.log("Total cost=", getTotalCost());
    console.log("Checking out");
    this.empty();
  };
  this.empty = function () {
    items = {};
    totalCost = 0;
    cartSize = 0;
  };
  this.checkIfItemExit = function (_id) {
    if (_id in items) return true;
    return false;
  };
}

let cart1 = new ShoppingCart();

/*cart1.addItem(1, "apple", 80);
cart1.addItem(2, "bannana", 20);
cart1.addItem(3, "mango", 60);
cart1.addItem(4, "grapes", 40);
cart1.printList();
cart1.removeItem(2);
console.log("After removing");
cart1.printList();
cart1.checkout();
//cart1.removeItem(3);
//cart1.removeItem(1);
//cart1.removeItem(1);
*/
function getSelectElement() {
  return document.getElementById("fruitsSelector");
}
function add() {
  let id = getSelectElement().value;
  console.log("Selected =" + id);
  if (cart1.checkIfItemExit(id)) {
    console.log("Item already exits");
    let element = findChildWithId(id);
    increment(element);
    return;
  }
  let newItem = itemsList[id];
  console.log(newItem.name);
  cart1.addItem(newItem.id, newItem.name, newItem.price);
  displayNewItem(newItem);
  updateTotalCost();
}
function updateTotalCost() {
  console.log("update total cost");
  //console.log(cart1.getTotalCost);
  document.getElementById("displayTotalCost").innerText = cart1.getTotalCost();
}
function findChildWithId(_id) {}
function increment(elm) {}
function getContainerElement() {
  return document.getElementById("container");
}
function displayNewItem(_newItem) {
  let newDivElement = createNewDivFor(_newItem);
  getContainerElement().appendChild(newDivElement);
}

function createNewDivFor(_newItem) {
  /*  function to create below div structure
      <div class="singleItem">
        <div class="idHolder">1</div>
        <div class="nameHolder">apple</div>
        <button class="decrement center">-</button>
        <div class="quantityHolder center">1</div>
        <button class="increment center">+</button>
        <div class="priceHolder center">40</div>
      </div>
  */
  let parentDiv = document.createElement("div");
  parentDiv.classList.add("singleItem");
  let idDiv = document.createElement("div");
  idDiv.innerHTML = _newItem.id;
  idDiv.classList.add("idHolder");
  let nameDiv = document.createElement("div");
  nameDiv.innerHTML = _newItem.name;
  nameDiv.classList.add("nameHolder");
  let decrementButton = document.createElement("button");
  decrementButton.innerHTML = "-";
  decrementButton.classList.add("decrement", "center");
  let quantityDiv = document.createElement("div");
  quantityDiv.innerHTML = "1";
  quantityDiv.classList.add("quantityHolder", "center");
  let incrementButton = document.createElement("button");
  incrementButton.innerHTML = "+";
  incrementButton.classList.add("increment", "center");
  let priceDiv = document.createElement("div");
  priceDiv.innerHTML = _newItem.price;
  priceDiv.classList.add("priceHolder", "center");
  parentDiv.appendChild(idDiv);
  parentDiv.appendChild(nameDiv);
  parentDiv.appendChild(decrementButton);
  parentDiv.appendChild(quantityDiv);
  parentDiv.appendChild(incrementButton);
  parentDiv.appendChild(priceDiv);

  return parentDiv;
}
