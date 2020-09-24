// NewsCardList. Класс списка карточек новостей.

export class NewsCardList {
	constructor(newsCard, container, sumCardsForRender) {
		this.newsCard = newsCard;
		this.container = container;
		this.clearCardContainer = this.clearCardContainer.bind(this);
		this.sumCardsForRender = sumCardsForRender;
		this.startSumRender = 0;
		this.finishSumRender = sumCardsForRender;
	}

	renderCard(res) {
		console.log(res)
		let arr = res.articles.slice(this.startSumRender, this.finishSumRender);
		arr.forEach((item) => {
			this.container.appendChild(this.newsCard.createCard(item));
		});
		this.startSumRender = this.startSumRender + this.sumCardsForRender;
		this.finishSumRender = this.finishSumRender + this.sumCardsForRender;
		console.log(this.startSumRender, this.finishSumRender)
	}
	clearCardContainer() {
		this.container.innerHTML = '';
		this.startSumRender = 0;
		this.finishSumRender = this.sumCardsForRender;
	}
}
