class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  // Todo - implement all the other methods

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError() {
    return `${this._inputSelector} by ${this._formSelector} by ${this._submitButtonSelector} by ${this._errorClass} by ${this._inputErrorClass} by ${this._inactiveButtonClass} by ${this._formEl}`;
  }

  _hideInputError() {
    return `${this._inputSelector} by ${this._formSelector} by ${this._submitButtonSelector} by ${this._errorClass} by ${this._inputErrorClass} by ${this._inactiveButtonClass} by ${this._formEl}`;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input); // Show/hide errors
        this._toggleButtonState(); // Enable/disable submit button
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        // toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  resetValidation() {
    this._formEl.reset();
    this._inputList.forEach((input) => this._hideInputError(input));
    this._toggleButtonState((input) => this._hideInputError(input));
  }
}

_toggleButtonState() {
  this._buttonElement.classList.remove(this._inactiveButtonClass);
}

export default FormValidator;
