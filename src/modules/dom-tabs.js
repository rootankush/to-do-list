export const createFolder = function (callback) {
  const contentDiv = document.getElementById("content");

  const popupOverly = document.createElement("div");
  const popupBox = document.createElement("div");

  const projectDiv = document.createElement("div");
  const projectTitle = document.createElement("p");
  const projectInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  const closeBtn = document.createElement("button");

  popupOverly.classList.add("popupOverly");
  popupBox.classList.add("popupBox");
  projectDiv.classList.add("projectDiv");
  projectTitle.classList.add("projectTitle");
  projectInput.classList.add("projectInput");
  submitBtn.classList.add("submitBtn");
  closeBtn.classList.add("closeBtn");
  projectInput.id = "projectInput";

  projectTitle.textContent = "Project:";
  submitBtn.textContent = "Submit";
  closeBtn.textContent = "Close";

  projectInput.setAttribute("type", "text");

  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectInput);
  projectDiv.appendChild(submitBtn);
  projectDiv.appendChild(closeBtn);

  popupBox.appendChild(projectDiv);

  popupOverly.appendChild(popupBox);

  contentDiv.appendChild(popupOverly);

  submitBtn.onclick = function () {
    callback(projectInput.value);
    popupOverly.remove();
  };

  closeBtn.onclick = function () {
    popupOverly.remove();
  };
};
