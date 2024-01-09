let ul;
let todoForm;

let todoList = [];

document.addEventListener("DOMContentLoaded", () => {
  ul = document.getElementById("todoList");
  todoForm = document.getElementById("todoForm");
  todoNameError = document.getElementById("todoNameErrort");
  todoDescError = document.getElementById("todoDescError");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoName = event.target.elements[0];
    let todoDesc = event.target.elements[1];

    if (todoName.value.length > 2 && todoDesc.value.length > 10) {
      let newTodo = {
        name: todoName.value,
        desc: todoDesc.value,
        done: false,
      };

      for (let todo of todoList) {
        if (todo.name === todoName.value && todo.desc === todoDesc.value) {
          return;
        }
      }

      todoList.push(newTodo);
      console.log(todoList);

      ul.innerHTML = "";

      for (let todo of todoList) {
        let li = document.createElement("li");
        li.innerText = todo.name;
        ul.appendChild(li);
      }
    } else {
      if (todoName.value.length < 3) {
        todoName.classList.add("input-danger");
        todoNameError.innerText = "Nazwa jest za krótka !(min 3 znaki)";
      }
      if (todoDesc.value.length < 20) {
        todoDesc.classList.add("input-danger");
        todoDescError.innerText = "Opis jest za krótki !(min 10 znaków)";
      }
    }

    if (todoName.value.length > 2) {
      todoName.classList.remove("input-danger");
      todoNameError.innerText = "";
    }

    if (todoDesc.value.length > 10) {
      todoDesc.classList.remove("input-danger");
      todoDescError.innerText = "";
    }
  });
});
