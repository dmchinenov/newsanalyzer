// Рендерит необходимое количество карточек в контейнер, очищает контейнер

export class NewsCardList {
	constructor(newsCard, container, sumCardsForRender) {
		this.newsCard = newsCard;
		this.container = container;
		this.clearCardContainer = this.clearCardContainer.bind(this);
		this.sumCardsForRender = sumCardsForRender;
		this.startSumRender = 0;
		this.finishSumRender = sumCardsForRender;
	}

	// Рендерим карточки по 3 штуки
	renderCard(res) {
		let arr = res.articles.slice(this.startSumRender, this.finishSumRender);
		arr.forEach((item) => {
			this.container.appendChild(this.newsCard.createCard(item));
		});
		this.startSumRender = this.startSumRender + this.sumCardsForRender;
		this.finishSumRender = this.finishSumRender + this.sumCardsForRender;
	}

	// Очищаем контейнер с карточками и сбрасываем счетчик отрендеренных карточек
	clearCardContainer() {
		while (this.container.firstChild) {
			this.container.removeChild(this.container.firstChild);
		}
		this.startSumRender = 0;
		this.finishSumRender = this.sumCardsForRender;
	}
}
