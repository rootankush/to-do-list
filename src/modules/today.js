export const loadToday = () => {
	const mainContent = document.getElementById("main-content");
	const header = document.createElement("h1");
	mainContent.textContent = "";
	header.textContent = "Today";
	mainContent.appendChild(header);
};
