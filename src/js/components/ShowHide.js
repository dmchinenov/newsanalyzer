// класс скрывает/отображает переданные элементы или блоки

export class ShowHide {
	constructor() {}

	show(element) {
		element.classList.remove('visually-hidden');
	}
	hide(element) {
		element.classList.add('visually-hidden');
	}
}
