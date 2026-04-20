export const loadPopup = () => {
	const contentDiv = document.getElementById("main-content");

	const popupOverly = document.createElement("div");
	const popupBox = document.createElement("div");
	const popupFormTitle = document.createElement("h2");
	const popupForm = document.createElement("form");
	const titleLabel = document.createElement("label");
	const descriptionLabel = document.createElement("label");
	const dateLabel = document.createElement("label");
	const titleInput = document.createElement("input");
	const descriptionInput = document.createElement("input");
	const dateInput = document.createElement("input");

	const submitBtn = document.createElement("button");
	const closeBtn = document.createElement("button");

	// Class Names
	popupOverly.classList.add("popupOverly");
	popupBox.classList.add("popupBox");
	popupFormTitle.classList.add("popupFormTitle");
	popupForm.classList.add("popupForm");
	titleLabel.classList.add("formLabel");
	descriptionLabel.classList.add("formLabel");
	dateLabel.classList.add("formLabel");
	titleInput.classList.add("formInput");
	descriptionInput.classList.add("formInput");
	dateInput.classList.add("formInput");
	submitBtn.classList.add("submitBtn");

	titleLabel.textContent = "Title:";
	descriptionLabel.textContent = "Description:";
	dateLabel.textContent = "Date:";

	titleInput.setAttribute("type", "text");
	descriptionInput.setAttribute("type", "text");
	dateInput.setAttribute("type", "date");

	popupFormTitle.textContent = "To-Do List";
	popupForm.appendChild(titleLabel);
	popupForm.appendChild(titleInput);
	popupForm.appendChild(descriptionLabel);
	popupForm.appendChild(descriptionInput);
	popupForm.appendChild(dateLabel);
	popupForm.appendChild(dateInput);

	popupBox.appendChild(popupFormTitle);
	popupBox.appendChild(popupForm);
	popupBox.appendChild(closeBtn);

	popupOverly.appendChild(popupBox);

	contentDiv.appendChild(popupOverly);

	function togglePopup() {
		const overly = document.getElementsByClassName("popupOverly");
		overly.classList.toggle("show");
	}
};
