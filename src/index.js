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

function init() {
  loadHome();
  filterList();
  console.log("Todo App Initialized");
}

init();
