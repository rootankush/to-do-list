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
	const titleHolder = document.createElement("div");
	const title = document.createElement("h1");
	const titleInput = document.createElement("INPUT");
	const descriptionHolder = document.createElement("div");
	const description = document.createElement("p");
	const descriptionInput = document.createElement("INPUT");
	const dateHolder = document.createElement("div");
	const date = document.createElement("p");
	const dateInput = document.createElement("INPUT");
	card.classList.add("card");

	title.classList.add("title");
	description.classList.add("description");
	date.classList.add("date");

	titleHolder.classList.add("titleHolder");
	descriptionHolder.classList.add("descriptionHolder");
	dateHolder.classList.add("dateHolder");

	title.textContent = "Title:";
	description.textContent = "Description:";
	date.textContent = "Date:";

	titleInput.setAttribute("type", "text");
	descriptionInput.setAttribute("type", "text");
	dateInput.setAttribute("type", "text");

	titleHolder.appendChild(title);
	titleHolder.appendChild(titleInput);
	descriptionHolder.appendChild(description);
	descriptionHolder.appendChild(descriptionInput);
	dateHolder.appendChild(date);
	dateHolder.appendChild(dateInput);

	card.appendChild(titleHolder);
	card.appendChild(descriptionHolder);
	card.appendChild(dateHolder);

	contentDiv.appendChild(card);
}
