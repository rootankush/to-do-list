export const loadUpcoming = () => {
	const mainContent = document.getElementById("main-content");
	mainContent.textContent = "";
	const header = document.createElement("h1");
	header.textContent = "Upcoming";
	mainContent.appendChild(header);
};
