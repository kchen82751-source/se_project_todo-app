class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    console.log(this._popupElement);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      // TODO - call the close method
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    // TODO - remove the class from the popup element

    this._popupElement.classList.remove("popup_visible");
    // TODO - remove the escape listener
  }

  setEventListeners() {
    // This one listener will handle close button and modal listener
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target) evt.target.classList.contains(this._popupElement);
      // if the event target's classList contains "popup__close" or "popup"
      // then close the modal
    });
  }
}

export default Popup;
