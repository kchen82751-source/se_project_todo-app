class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    const deleteButton = this._todoElement.querySelector(".todo__delete-btn");
    deleteButton.addEventListener("click", () => {
      this._handleDelete(this._data.completed);
      this._todoElement.remove();
      this._todoElement = null;
    });
    this._handleCheck.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._handleCheck = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._handleCheck.checked = this._data.completed;
    this._handleCheck.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");

    todoNameEl.textContent = this._data.name;
    const todoDate = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);

    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
