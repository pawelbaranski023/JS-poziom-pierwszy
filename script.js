let ul;
let shoppingList = [
  "Mleko",
  "Jajka",
  "Jogurt",
  "Pasztet",
  "Bułka",
  "Ogórki kiszone",
];

document.addEventListener("DOMContentLoaded", () => {
  ul = document.getElementById("shoppingList");

  for (let shoppingProduct of shoppingList) {
    addListItem(shoppingProduct);
  }
});

function addListItem(shoppingProduct) {
  let li = document.createElement("li");
  li.innerText = shoppingProduct;
  ul.appendChild(li);
}
