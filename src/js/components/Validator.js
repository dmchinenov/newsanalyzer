// Сейчас мы ищем инпут внутри переданной формы по классу, лучше переделать на поиск всех инпутов в переданной форме без указания класса

export class FormValidator {
  constructor(SEARCH_FORM, ERROR_MESSAGES, SEARCH_ERROR) {
    this.form = SEARCH_FORM;
    this.errorMessages = ERROR_MESSAGES;
    this.errorElem = SEARCH_ERROR;
  }

  // Слушатель инпута
  setEventListener() {
    this.form.addEventListener("input", this.isFormValid.bind(this));
  }

  // Присваиваем тексты ошибок к инпутам
  isValidate(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity(this.errorMessages.emptyinput);
      return false;
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(this.errorMessages.errorlength);
      return false;
    }
    return input.checkValidity();
  }

  // Проверяем форму и присваиваем ошибку для spanError.
  isFormValid() {
    const input = this.form.querySelector(".search__input");
    const valid = this.isValidate(input);
    this.errorElem.textContent = input.validationMessage;
    return valid;
  }

  // Сбрасываем ошибки с формы
  clearError() {
    this.errorElem.textContent = " ";
  }
}
