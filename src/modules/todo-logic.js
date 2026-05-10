export class Todo {
  constructor(title, description, date, priority, project, completed = false) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.completed = completed;
  }

  toggleStatus() {
    this.completed = !this.completed;
  }
  updateDetails(newData) {
    this.title = newData.title || this.title;
    this.description = newData.description || this.description;
    this.date = newData.date || this.date;
    this.priority = newData.priority || this.priority;
    this.project = newData.project || this.project;
  }
}
