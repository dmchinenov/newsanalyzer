// Генерирует карточку новостей
import picturenotfound from '../../../src/images/picturenotfound.webp';

export class NewsCard {
	constructor(newCardTemplate, createDate) {
		this.template = newCardTemplate;
		this.createDate = createDate;
	}

	// Создает экземпляр карточки и присваивает ей значения из переданного объекта
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
