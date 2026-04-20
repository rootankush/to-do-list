export const loadOverdue = () => {
	const mainContent = document.getElementById("main-content");
	mainContent.textContent = "";
	const header = document.createElement("h1");
	header.textContent = "Overdue";
	mainContent.appendChild(header);
};
