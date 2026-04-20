export const loadHome = () => {
	const mainContent = document.getElementById("main-content");
	mainContent.textContent = "";
	const header = document.createElement("h1");
	header.textContent = "Home";
	mainContent.appendChild(header);
};
