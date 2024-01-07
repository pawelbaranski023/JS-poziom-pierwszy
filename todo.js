let ul;
let todoForm;

let todoList = [];

document.addEventListener("DOMContentLoaded", () => {
  ul = document.getElementById("todoList");
  todoForm = document.getElementById("todoForm");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoName = event.target.elements[0];
    let todoDesc = event.target.elements[1];

    if (todoName.value.length > 2 && todoDesc.value.length > 20) {
      let todo = {
        name: todoName.value,
        desc: todoDesc.value,
        done: false,
      };

      todoList.push(todo);
    } else {
    }
  });
});
