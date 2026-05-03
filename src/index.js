import "./style.css";
import "./styles/popup.css";
import "./styles/task.css";
import {
  loadHome,
  loadToday,
  loadUpcoming,
  loadOverdue,
  loadDone,
} from "./modules/tabs.js";
import { loadStorage } from "./modules/storage.js";
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

loadHome();
