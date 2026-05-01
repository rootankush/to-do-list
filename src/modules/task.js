export const loadTask = (data) => {
  console.log(data);

  const contentDiv = document.getElementById("main-content");
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const date = document.createElement("p");
  card.classList.add("card");

  title.classList.add("title");
  description.classList.add("description");
  date.classList.add("date");

  title.textContent = `Title: ${data.title}`;
  description.textContent = `Description: ${data.description}`;
  date.textContent = `Date: ${data.date}`;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(date);

  contentDiv.appendChild(card);
};
