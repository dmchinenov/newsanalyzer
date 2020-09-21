// NewsCardList. Класс списка карточек новостей.

export class NewsCardList {
	constructor(newsCard, container, api) {
		this.newsCard = newsCard;
		this.container = container;
		this.api = api;
	}

	// addCard(obj) {
	// 	this.container.appendChild(this.newsCard.createCard(obj));
	// }

	renderCard(res) {
		res.forEach((item) => {
            const elem = this.newsCard.createCard(item);
            this.container.appendChild(elem)
        // this.container.appendChild(this.newsCard.createCard(item));
		})
        console.log(`Загружено ${res.length} карточек`);
    }
}
