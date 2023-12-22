let ul;

document.addEventListener("DOMContentLoaded", () => {
  ul = document.getElementById("shoppingList");
  addListItem();
});

function addListItem() {
  let li = document.createElement("li");
  li.innerText = "test";
  ul.appendChild(li);
}
