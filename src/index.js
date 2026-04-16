import "./style.css";

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

const contentDiv = document.get;
