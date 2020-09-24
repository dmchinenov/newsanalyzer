// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API,
// списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища,
// а список карточек отображать полученные данные на странице.
// Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.

export class Validation {
	constructor(SEARCH_FORM, ERROR_MESSAGES, SEARCH_ERROR) {
		this.form = SEARCH_FORM;
		this.errorMessages = ERROR_MESSAGES;
		this.errorElem = SEARCH_ERROR;
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
		return valid;
	}

	// Сбрасываем ошибки с формы
	clearError() {
		this.errorElem.textContent = ' ';
	}
}
