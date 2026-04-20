export const loadDone = () => {
	const mainContent = document.getElementById("main-content");
	mainContent.textContent = "";
	const header = document.createElement("h1");
	header.textContent = "Done";
	mainContent.appendChild(header);
};
