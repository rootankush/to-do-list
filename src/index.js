import "./style.css";
import "./styles/popup.css";
import "./styles/task.css";
import {
  loadHome,
  loadToday,
  loadUpcoming,
  loadOverdue,
} from "./modules/tabs.js";
import { loadStorage, masterStorage } from "./modules/storage.js";
import { loadPopup } from "./modules/popup.js";
import { loadTask } from "./modules/task.js";

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

function checkLocalStorage() {
  if (localStorage.getItem("todos") != null) {
    let storedUser = localStorage.getItem("todos");
    let storedData = JSON.parse(storedUser);
    for (let i = 0; i < storedData.length; i++) {
      masterStorage.push(storedData[i]);
    }
    loadHome();
  }
}

checkLocalStorage();
