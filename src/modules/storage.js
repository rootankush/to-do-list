import "./tabs.js";

export const masterStorage = [];

export const loadStorage = function (data) {
  masterStorage.push(data);
  localStorage.setItem("todos", JSON.stringify(masterStorage));
};
