import { ArrowUp01 } from "lucide";
import { createTabs } from "./tabs.js";
import { Todo } from "./todo-logic.js";

export const masterStorage = [];
export const projectStorage = [];

export const loadStorage = function (data) {
  masterStorage.push(data);
  localStorage.setItem("todos", JSON.stringify(masterStorage));
};

export const saveProject = function (projectName) {
  projectStorage.push(projectName);
  localStorage.setItem("projects", JSON.stringify(projectStorage));
};

export const deleteTodo = (data) => {
  const FindIndex = (item) =>
    data.title == item.title && data.project == item.project;
  let taskIndex = masterStorage.findIndex(FindIndex);
  masterStorage.splice(taskIndex, 1);
  localStorage.setItem("todos", JSON.stringify(masterStorage));
};

function checkLocalStorage() {
  if (localStorage.getItem("todos") != null) {
    let storedUser = localStorage.getItem("todos");
    let storedData = JSON.parse(storedUser);
    masterStorage.length = 0;
    storedData.forEach((item) => {
      const todoInstance = new Todo(
        item.title,
        item.description,
        item.date,
        item.priority,
        item.project,
        item.completed,
      );
      masterStorage.push(todoInstance);
    });
  }
}

function checkLocalStorageProject() {
  if (localStorage.getItem("projects") != null) {
    let storedProject = localStorage.getItem("projects");
    let storedProjectData = JSON.parse(storedProject);
    for (let i = 0; i < storedProjectData.length; i++) {
      projectStorage.push(storedProjectData[i]);
    }
    for (let i = 0; i < projectStorage.length; i++) {
      createTabs(projectStorage[i]);
    }
  }
}

checkLocalStorage();
checkLocalStorageProject();
