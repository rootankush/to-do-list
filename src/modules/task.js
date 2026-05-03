import { loadStorage } from "./storage";
import { loadPopup } from "./popup";

export const loadTask = (data) => {
  const contentDiv = document.getElementById("main-content");
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const date = document.createElement("p");
  const btnDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  card.classList.add("card");

  title.classList.add("title");
  description.classList.add("description");
  date.classList.add("date");
  btnDiv.classList.add("btnDiv");
  editBtn.classList.add("editBtn");
  deleteBtn.classList.add("deleteBtn");

  title.textContent = `Title: ${data.title}`;
  description.textContent = `Description: ${data.description}`;
  date.textContent = `Date: ${data.date}`;

  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(date);
  card.appendChild(btnDiv);

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

  editBtn.addEventListener("click", function () {
    card.remove();
    loadPopup(loadStorage);
  });

  contentDiv.appendChild(card);
};
