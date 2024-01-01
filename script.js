let ul;
let newItemForm;

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
  newItemForm = document.getElementById("newItemForm");

  newItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event);
  });

  for (let shoppingItem of shoppingList) {
    addListItem(shoppingItem);
  }
});

function addListItem(shoppingItem) {
  let li = document.createElement("li");
  li.innerText = shoppingItem;
  ul.appendChild(li);
}
