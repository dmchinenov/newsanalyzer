import { errorMessages } from "../constans/constans.js";

// что можно добавить :
// Сейчас валидация работает на один инпут, а их возможно несколько. Валидация не должна искать элементы, их нужно передавать в валидацию

export class FormValidator {
  constructor(form) {
    this.form = form;
  }

  // Слушатель инпута
  setEventListener() {
    this.form.addEventListener("input", this.isFieldValid.bind(this));
  }

  // Присваиваем тексты ошибок к инпутам
  isValidate(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity(errorMessages.emptyinput);
      return false;
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(errorMessages.errorlength);
      return false;
    }
    return input.checkValidity();
  }

  // Проверяем инпут и присваиваем ошибку для span.
  isFieldValid() {
    const input = this.form.querySelector(".search__input");
    const errorElement = document.querySelector(".search__error");
    const valid = this.isValidate(input);
    errorElement.textContent = input.validationMessage;
    return valid;
  }

  // Проверяем валидна ли форма
  isFormValid() {
    if (this.isFieldValid(this.form)) {
      return true;
    } else {
      return false;
    }
  }

  // Сбрасываем ошибки с формы
  clearError() {
    const error = this.form.querySelector(".search__error");
    error.textContent = " ";
    console.log("sadas");
  }
}
