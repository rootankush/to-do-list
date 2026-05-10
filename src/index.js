import "./style.css";
import "./styles/popup.css";
import "./styles/task.css";
import { loadHome } from "./modules/tabs.js";

import {
  createIcons,
  PlusCircle,
  Home,
  Calendar,
  List,
  AlertCircle,
  CheckCheck,
} from "lucide";
import { filterList } from "./modules/filter.js";
import {
  checkLocalStorage,
  checkLocalStorageProject,
  loadDummyData,
  masterStorage,
} from "./modules/storage.js";

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

function init() {
  checkLocalStorage();
  checkLocalStorageProject();
  if (masterStorage.length === 0) {
    loadDummyData();
  }
  loadHome();
  filterList();
  console.log("Todo App Initialized");
}

init();
