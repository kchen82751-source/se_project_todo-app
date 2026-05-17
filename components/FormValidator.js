class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.inputSelector;
    this._errorClass = settings.inputSelector;
    this._inputErrorClass = settings.inputSelector;
    this._inactiveButtonClass = settings.inputSelector;
    this._formEl = formEl;
  }

  // Todo - implement all the other methods

  _checkInputValidity(inputElement) {
    // (1) TODO - implement this method
    // (a) copy body of existing function
    // (b) work through errors in console as we for enableValidation
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );

    // (2) TODO - finish implementing_setEventListeners

    // const buttonElement = formElement.querySelector(
    //   settings.submitButtonSelector,
    // );

    // toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        // toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
