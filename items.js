function Item(_id, _name, _price) {
  let price = _price;
  let name = _name;
  let id = _id;

  Object.defineProperty(this, "price", {
    get: function () {
      return price;
    }
  });
  Object.defineProperty(this, "name", {
    get: function () {
      return name;
    }
  });
  Object.defineProperty(this, "id", {
    get: function () {
      return id;
    }
  });
}
