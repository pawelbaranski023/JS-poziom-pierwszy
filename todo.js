"use string";

let ul;
let todoForm;

let todoList = [];

document.addEventListener("DOMContentLoaded", () => {
  ul = document.getElementById("todoList");
  todoForm = document.getElementById("todoForm");
  let todoNameError = document.getElementById("todoNameError");
  let todoDescError = document.getElementById("todoDescError");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoName = event.target.elements[0];
    let todoDesc = event.target.elements[1];

    if (todoName.value.length > 2 && todoDesc.value.length > 9) {
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

      renderList();
    } else {
      if (todoName.value.length < 3) {
        todoName.classList.add("input-danger");
        todoNameError.innerText = "Nazwa jest za krótka !(min 3 znaki)";
      }
      if (todoDesc.value.length < 20) {
        todoDesc.classList.add("input-danger");
        todoDescError.innerText = "Opis jest za krótki !(min 20 znaków)";
      }
    }

    if (todoName.value.length > 2) {
      todoName.classList.remove("input-danger");
      todoNameError.innerText = "";
    }

    if (todoDesc.value.length > 9) {
      todoDesc.classList.remove("input-danger");
      todoDescError.innerText = "";
    }
  });
});

const renderList = () => {
  ul.innerHTML = "";

  todoList.forEach((todo, index) => {
    let li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let main = document.createElement("main");
    let heading = document.createElement("h5");
    let paragraph = document.createElement("p");
    let button = document.createElement("button");

    button.addEventListener("click", changeTaskStatus);
    button.dataset.taskId = index;

    if (!todo.done) {
      button.innerText = "finish";
      button.classList.add("btn", "btn-success", "btn-sm");
    } else {
      button.innerText = "revert";
      button.classList.add("btn", "btn-danger", "btn-sm");
      main.style.textDecoration = "line-through";
    }

    heading.innerText = todo.name;
    paragraph.innerText = todo.desc;

    main.appendChild(heading);
    main.appendChild(paragraph);

    li.appendChild(main);
    li.appendChild(button);

    ul.appendChild(li);
  });
};
const changeTaskStatus = (event) => {
  let todo = todoList[Math.round(event.target.dataset.taskId)];

  if (todo.done === true) {
    todo.done = false;
  } else {
    todo.done = true;
  }

  renderList();
  return;
};
