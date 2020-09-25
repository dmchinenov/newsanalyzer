// Генерирует карточку новостей

import picturenotfound from '../../../src/images/picturenotfound.webp';
export class NewsCard {
	constructor(TEMPLATE, createDate) {
		this.template = TEMPLATE;
		this.createDate = createDate;
	}

	createCard(obj) {
		const card = this.template.content.querySelector(".card").cloneNode(true);
		const date = this.createDate.dateChanger(obj.publishedAt.split('T')[0]);
		this.card = card;
		if (obj.urlToImage == null) {
			this.card.querySelector('.card__image').setAttribute('style', `background-image: url(${picturenotfound})`);
		}
		else {
			this.card.querySelector('.card__image').setAttribute('style', `background-image: url(${obj.urlToImage})`);
		}
		this.card.querySelector('.card__title').textContent = obj.title;
		this.card.querySelector('.card__text').textContent = obj.description;
		this.card.querySelector('.card__date').textContent = date;
		this.card.querySelector('.card__author').textContent = obj.source.name;
		this.card.href = obj.url;
		return this.card;
	}
}
