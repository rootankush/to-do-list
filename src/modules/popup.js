export const loadPopup = (callback) => {
  const contentDiv = document.getElementById("content");

  const popupOverly = document.createElement("div");
  const popupBox = document.createElement("div");
  // Title
  const titleDiv = document.createElement("div");
  const titleText = document.createElement("p");
  const titleInput = document.createElement("input");
  // Description
  const descriptionDiv = document.createElement("div");
  const descriptionText = document.createElement("p");
  const descriptionInput = document.createElement("input");
  // Date
  const dateDiv = document.createElement("div");
  const dateText = document.createElement("p");
  const dateInput = document.createElement("input");
  // Buttons
  const buttonDiv = document.createElement("div");
  const submitBtn = document.createElement("button");
  const closeBtn = document.createElement("button");

  // classList
  popupOverly.classList.add("popupOverly");
  popupBox.classList.add("popupBox");
  titleDiv.classList.add("titleDiv");
  titleText.classList.add("titleText");
  titleInput.classList.add("titleInput");
  descriptionDiv.classList.add("descriptionDiv");
  descriptionText.classList.add("descriptionText");
  descriptionInput.classList.add("descriptionInput");
  dateDiv.classList.add("dateDiv");
  dateText.classList.add("dateText");
  dateInput.classList.add("dateInput");
  buttonDiv.classList.add("buttonDiv");
  submitBtn.classList.add("submitBtn");
  closeBtn.classList.add("closeBtn");

  titleText.textContent = "Title:";
  descriptionText.textContent = "Description:";
  dateText.textContent = "Date:";
  submitBtn.textContent = "Submit";
  closeBtn.textContent = "Close";

  titleInput.setAttribute("type", "text");
  descriptionInput.setAttribute("type", "text");
  dateInput.setAttribute("type", "date");

  // DIVs
  titleDiv.appendChild(titleText);
  titleDiv.appendChild(titleInput);

  descriptionDiv.appendChild(descriptionText);
  descriptionDiv.appendChild(descriptionInput);

  dateDiv.appendChild(dateText);
  dateDiv.appendChild(dateInput);

  buttonDiv.appendChild(submitBtn);
  buttonDiv.appendChild(closeBtn);

  popupBox.appendChild(titleDiv);
  popupBox.appendChild(descriptionDiv);
  popupBox.appendChild(dateDiv);
  popupBox.appendChild(buttonDiv);

  popupOverly.appendChild(popupBox);

  closeBtn.onclick = function togglePopup() {
    popupOverly.remove();
  };

  submitBtn.onclick = function () {
    const data = {
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.value,
    };
    callback(data);
    popupOverly.remove();
  };

  contentDiv.appendChild(popupOverly);
};
