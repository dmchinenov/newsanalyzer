// NewsCard. Класс карточки новости.

export class NewsCard {
	constructor(TEMPLATE) {
		this.template = TEMPLATE;
	}

	createCard(obj) {
		const card = this.template.cloneNode(true);
		this.card = card;
		this.card.querySelector('.card__image').setAttribute('style', `background-image: url(${obj.urlToImage})`);
		this.card.querySelector('.card__title').textContent = obj.title;
		this.card.querySelector('.card__text').textContent = obj.description;
		this.card.querySelector('.card__date').textContent = obj.publishedAt.split('T')[0];
		this.card.querySelector('.card__author').textContent = obj.source.name;
		return this.card;
	}
}
