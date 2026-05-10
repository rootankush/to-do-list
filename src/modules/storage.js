import { loadTask } from "./dom-task.js";
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

export const loadDummyData = () => {
  const dummyTasks = [
    new Todo(
      "Learn Neovim",
      "Master the hjkl keys",
      "2026-05-11",
      "High",
      "home",
    ),
    new Todo(
      "Build Robot",
      "Assemble the wooden frame for the 4kg bot",
      "2026-05-12",
      "Mid",
      "home",
    ),
    new Todo(
      "Buy Momos",
      "Treat yourself after coding",
      "2026-05-11",
      "Low",
      "food",
    ),
    new Todo(
      "Review TOP",
      "Check the Todo List project requirements",
      "2026-05-15",
      "High",
      "home",
    ),
  ];

  dummyTasks.forEach((task) => {
    masterStorage.push(task);
    localStorage.setItem("todos", JSON.stringify(masterStorage));
  });
};

export const checkLocalStorage = () => {
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
};

export const checkLocalStorageProject = () => {
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
};
