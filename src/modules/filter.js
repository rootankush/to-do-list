import { currentview } from "./tabs";
import { masterStorage } from "./storage";
import { loadTask } from "./task";

const contentDiv = document.getElementById("main-content");

const currentDate = new Date().toISOString().split("T")[0];

export const filterList = function () {
  contentDiv.textContent = " ";
  switch (currentview) {
    case "home":
      contentDiv.textContent = " ";
      getHomeTask(masterStorage);
      break;
    case "today":
      contentDiv.textContent = " ";
      getTodaysTask(masterStorage);
      break;
    case "overdue":
      contentDiv.textContent = " ";
      getOverdueTask(masterStorage);
      break;
    case "upcoming":
      contentDiv.textContent = " ";
      getUpcomingTask(masterStorage);
      break;
    default:
      getGeneral(masterStorage);
  }

  function getGeneral(task) {
    task
      .filter((task) => task.project === currentview)
      .forEach((task) => {
        loadTask(task);
      });
  }

  function getHomeTask(task) {
    task.forEach((task) => {
      loadTask(task);
    });
  }

  function getTodaysTask(task) {
    task
      .filter((task) => {
        return task.date == currentDate;
      })
      .forEach((task) => {
        loadTask(task);
      });
  }

  function getOverdueTask(task) {
    task
      .filter((task) => {
        return task.date < currentDate;
      })
      .forEach((task) => {
        loadTask(task);
      });
  }

  function getUpcomingTask(task) {
    task
      .filter((task) => {
        return task.date > currentDate;
      })
      .forEach((task) => {
        loadTask(task);
      });
  }
};

console.log(currentDate);
