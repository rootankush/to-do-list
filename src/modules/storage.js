import "./tabs.js";
import { loadPopup } from "./popup.js";

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
    for (let i = 0; i < storedData.length; i++) {
      masterStorage.push(storedData[i]);
    }
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
