import { loadStorage, saveProject } from "./storage.js";
import { loadPopup } from "./popup.js";
import { filterList } from "./filter.js";
import { createFolder } from "./dom-tabs.js";

export const loadHome = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.textContent = "";
  const header = document.createElement("h1");
  header.textContent = "Home";
  mainContent.appendChild(header);
};

export let currentview = "";

// SideBar Tabs
const addTask = document.getElementById("add-task");
const homeBtn = document.getElementById("home-btn");
const todayBtn = document.getElementById("today-btn");
const upcomingBtn = document.getElementById("upcoming-btn");
const overdueBtn = document.getElementById("overdue-btn");
const addProject = document.getElementById("add-project-btn");

homeBtn.addEventListener("click", function () {
  currentview = "home";
  filterList();
});
todayBtn.addEventListener("click", function () {
  currentview = "today";
  filterList();
});
upcomingBtn.addEventListener("click", function () {
  currentview = "upcoming";
  filterList();
});
overdueBtn.addEventListener("click", function () {
  currentview = "overdue";
  filterList();
});
addTask.addEventListener("click", function () {
  loadPopup(loadStorage);
});
addProject.addEventListener("click", function () {
  createFolder(twocallBack);
  filterList();
});

function twocallBack(projectName) {
  saveProject(projectName.toLowerCase());
  createTabs(projectName.toLowerCase());
}

export function createTabs(name) {
  const SideBar = document.getElementById("sidebar");
  const tab = document.createElement("button");
  tab.classList.add("sidebar-btn");
  tab.textContent = `${name}`;
  SideBar.appendChild(tab);

  tab.addEventListener("click", function () {
    const mainContent = document.getElementById("main-content");
    mainContent.textContent = "";
    const header = document.createElement("h1");
    header.textContent = `${name}`;
    mainContent.appendChild(header);
    currentview = `${name}`;
    filterList();
  });
}
