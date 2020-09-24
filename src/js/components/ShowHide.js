// класс скрывает/отображает переданные элементы или блоки

export class ShowHideDisabled {
	constructor() {}

	show(element) {
		element.classList.remove('visually-hidden');
	}
	hide(element) {
		element.classList.add('visually-hidden');
	}
	disabled(element, boolean) {
		element.disabled = boolean;
	}
}
