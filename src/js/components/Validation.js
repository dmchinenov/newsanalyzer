// Валидирует переданные инпуты, присваивает ошибки инпутам.
import { vibroError } from "../../js/utils/Utils.js"

export class Validation {
	constructor(searchForm, ERROR_MESSAGES, searchError) {
		this.form = searchForm;
		this.errorMessages = ERROR_MESSAGES;
		this.errorElem = searchError;
	}

	// Слушатель инпута
	setEventListener() {
		this.form.addEventListener('input', this.isFormValid.bind(this));
	}

	// Присваиваем тексты ошибок к инпутам
	isValidate(input) {
		input.setCustomValidity('');
		if (input.validity.valueMissing) {
			input.setCustomValidity(this.errorMessages.emptyinput);
			return false;
		}
		if (input.validity.tooShort || input.validity.tooLong) {
			input.setCustomValidity(this.errorMessages.errorlength);
			return false;
		}
		if (input.validity.patternMismatch) {
			input.setCustomValidity(this.errorMessages.errorpattern);
		}
		return input.checkValidity();
	}

	// Проверяем форму и присваиваем ошибку для spanError.
	isFormValid() {
		const input = this.form.querySelector('.search__input');
		const valid = this.isValidate(input);
		this.errorElem.textContent = input.validationMessage;
		vibroError(this.errorElem)
		return valid;
	}

	// Сбрасываем ошибки с формы
	clearError() {
		this.errorElem.textContent = ' ';
	}
}
