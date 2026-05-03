import { loadStorage } from "./storage.js";
import { loadPopup } from "./popup.js";
import { filterList } from "./filter.js";

export const loadHome = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.textContent = "";
  const header = document.createElement("h1");
  header.textContent = "Home";
  mainContent.appendChild(header);
};

export const loadToday = () => {
  const mainContent = document.getElementById("main-content");
  const header = document.createElement("h1");
  mainContent.textContent = "";
  header.textContent = "Today";
  mainContent.appendChild(header);
};

export const loadUpcoming = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.textContent = "";
  const header = document.createElement("h1");
  header.textContent = "Upcoming";
  mainContent.appendChild(header);
};

export const loadOverdue = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.textContent = "";
  const header = document.createElement("h1");
  header.textContent = "Overdue";
  mainContent.appendChild(header);
};

export const loadDone = () => {
  const mainContent = document.getElementById("main-content");
  mainContent.textContent = "";
  const header = document.createElement("h1");
  header.textContent = "Done";
  mainContent.appendChild(header);
};

export let currentview = "";

// SideBar Tabs
const addTask = document.getElementById("add-task");
const homeBtn = document.getElementById("home-btn");
const todayBtn = document.getElementById("today-btn");
const upcomingBtn = document.getElementById("upcoming-btn");
const overdueBtn = document.getElementById("overdue-btn");
const doneBtn = document.getElementById("done-btn");

homeBtn.addEventListener("click", function () {
  currentview = "home";
  filterList();
  console.log(currentview);
});
todayBtn.addEventListener("click", function () {
  currentview = "today";
  filterList();
  console.log(currentview);
});
upcomingBtn.addEventListener("click", function () {
  currentview = "upcoming";
  filterList();
  console.log(currentview);
});
overdueBtn.addEventListener("click", function () {
  currentview = "overdue";
  filterList();
  console.log(currentview);
});
doneBtn.addEventListener("click", function () {
  currentview = "done";
  filterList();
  console.log(currentview);
});
addTask.addEventListener("click", function () {
  loadPopup(loadStorage);
});
