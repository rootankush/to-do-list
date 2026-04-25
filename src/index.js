import "./style.css";
import "./styles/popup.css";
import { loadHome } from "./modules/home.js";
import { loadToday } from "./modules/today.js";
import { loadUpcoming } from "./modules/upcoming.js";
import { loadOverdue } from "./modules/overdue.js";
import { loadDone } from "./modules/completed.js";
import { loadPopup } from "./modules/popup.js";

import {
  createIcons,
  PlusCircle,
  Home,
  Calendar,
  List,
  AlertCircle,
  CheckCheck,
} from "lucide";

// This function scans the DOM for 'data-lucide' attributes and replaces them with SVGs
createIcons({
  icons: {
    PlusCircle,
    Home,
    Calendar,
    List,
    AlertCircle,
    CheckCheck,
  },
});

const contentDiv = document.getElementById("main-content");

// SideBar Tabs
const addTask = document.getElementById("add-task");
const homeBtn = document.getElementById("home-btn");
const todayBtn = document.getElementById("today-btn");
const upcomingBtn = document.getElementById("upcoming-btn");
const overdueBtn = document.getElementById("overdue-btn");
const doneBtn = document.getElementById("done-btn");

homeBtn.addEventListener("click", loadHome);
todayBtn.addEventListener("click", loadToday);
upcomingBtn.addEventListener("click", loadUpcoming);
overdueBtn.addEventListener("click", loadOverdue);
doneBtn.addEventListener("click", loadDone);
addTask.addEventListener("click", loadPopup);

function createTask() {
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const date = document.createElement("p");
  card.classList.add("card");

  title.classList.add("title");
  description.classList.add("description");
  date.classList.add("date");

  title.textContent = "Title:";
  description.textContent = "Description:";
  date.textContent = "Date:";

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(date);

  contentDiv.appendChild(card);
}
