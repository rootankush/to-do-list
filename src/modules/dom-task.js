import { loadStorage, masterStorage, deleteTodo } from "./storage";
import { loadPopup } from "./popup";
import { filterList } from "./filter";

export const loadTask = (data) => {
  const contentDiv = document.getElementById("main-content");
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const date = document.createElement("p");
  const priority = document.createElement("p");
  const btnDiv = document.createElement("div");
  const customCheckbox = document.createElement("label");
  const checkbox = document.createElement("input");
  const checkmark = document.createElement("span");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  card.classList.add("card");

  title.classList.add("title");
  description.classList.add("description");
  date.classList.add("date");
  priority.classList.add("priority");
  btnDiv.classList.add("btnDiv");
  customCheckbox.classList.add("customCheckbox");
  checkbox.classList.add("checkbox");
  checkmark.classList.add("checkmark");
  editBtn.classList.add("editBtn");
  deleteBtn.classList.add("deleteBtn");

  title.textContent = `Title: ${data.title}`;
  description.textContent = `Description: ${data.description}`;
  date.textContent = `Date: ${data.date}`;
  priority.textContent = `Priority: ${data.priority}`;

  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";
  checkbox.type = "checkbox";
  checkbox.checked = data.completed;

  if (data.completed) {
    card.classList.add("completedTask");
  }

  customCheckbox.appendChild(checkbox);
  customCheckbox.appendChild(checkmark);

  btnDiv.appendChild(customCheckbox);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(date);
  card.appendChild(priority);
  card.appendChild(btnDiv);

  checkbox.addEventListener("change", function () {
    data.toggleStatus();

    if (data.completed) {
      card.classList.add("completedTask");
    } else {
      card.classList.remove("completedTask");
    }
    localStorage.setItem("todos", JSON.stringify(masterStorage));
  });

  deleteBtn.addEventListener("click", function () {
    deleteTodo(data);
    card.remove();
  });

  editBtn.addEventListener("click", function () {
    loadPopup(() => {
      localStorage.setItem("todos", JSON.stringify(masterStorage));
      filterList();
    }, data);
  });

  contentDiv.appendChild(card);
};
