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
  inputError = document.getElementById("inputError");
  newItemForm = document.getElementById("newItemForm");

  newItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = event.target.elements[0];

    if (input.value.length > 2 && !input.value.startsWith(" ")) {
      addListItem(input.value);
      input.value = "";

      input.classList.remove("input-danger");
      inputError.innerText = "";
    } else {
      inputError.innerText = "Nazwa nie spełnia kryteriow";
      input.classList.add("input-danger");
    }
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
