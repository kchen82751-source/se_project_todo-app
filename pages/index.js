import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");

const addTodoForm = document.forms["add-todo-form"];

const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    addTodoForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const name = evt.target.name.value;
      const dateInput = evt.target.date.value;

      // Create a date object and adjust for timezone
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

      const id = uuidv4();
      const values = { name, date, id };
      todoCounter.updateTotal(true);
      renderTodo(values);
      newTodoValidator.resetValidation();
      addTodoPopup.close();
    });
    PopupWithForm._getInputValues();
    section.addItem();
    todoCounter.updateTotal(true);
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (todo) => {
    renderTodo(todo);
    // section.addItem(element);
    // Generate todo item
    // Add it to the todo list
    // (Refer to the forEach loop in this file)
  },
  containerSelector: ".todos__list",
});

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateTotal(false);
  }
}

// The logic in this function should all be handled in the Todo class.

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

function generateTodo(data) {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
}

section.renderItems();

function renderTodo(todoData) {
  const todo = generateTodo(todoData);
  section.addItem(todo); // let Section handle the DOM
}

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
