import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    // move to constructor

    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
      // TODO
      // add a key/value pair to the values object for each input
      // the key is input.name
      // the value is input.value
      // need to use brackets notation, not dot notation
    });
    return inputValues;
  }

  getForm() {
    return this._popupForm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      // TODO - Pass result of _getInputValues to submission handler
      this._handleFormSubmit(inputValues);
    });
  }
}
export default PopupWithForm;
