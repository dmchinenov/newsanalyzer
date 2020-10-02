// Скрывает/отображает переданные элементы или блоки

export class ShowHideDisabled {
	constructor() {
	}

	// Отображает элемент
	show(element) {
		element.classList.remove('visually-hidden');
	}
	// Скрывает элемент
	hide(element) {
		element.classList.add('visually-hidden');
	}

	// Блокирует элемент
	disabled(element, boolean) {
		element.disabled = boolean;
	}
}
