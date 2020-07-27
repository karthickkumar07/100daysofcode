const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");

if (window.localStorage.getItem("todos") == undefined) {
  var todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}
var todosaitems = window.localStorage.getItem("todos");
var todos = JSON.parse(todosaitems);

class item {
  constructor(todo) {
    this.createTodos(todo);
  }
  createTodos(todo) {
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    var input = document.createElement("input");
    input.value = todo;
    input.type = "text";
    input.disabled = true;
    input.classList.add("item_input");

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "REMOVE";
    remove.addEventListener("click", () => {
      this.remove(itemBox, todo);
    });

    container.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(remove);
  }

  remove(itemBox, todo) {
    itemBox.parentNode.removeChild(itemBox);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }
}

add.addEventListener("click", check);

function check() {
  if (inputValue.value !== "") {
    new item(inputValue.value);
    todos.push(inputValue.value);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    inputValue.value = "";
  }
}

for (var i = 0; i < todos.length; i++) {
  new item(todos[i]);
}
