// CommitCard. Аналогичен компоненту NewsCard только для карточек коммитов на странице «О проекте».

export class CommitCard {
	constructor(cardTemplate, createDate) {
		this.template = cardTemplate;
		this.createDate = createDate;
	}

	createCard(obj) {
		const card = this.template.content.querySelector(".ghcard").cloneNode(true);
        const date = this.createDate.dateChanger(obj.commit.committer.date.split('T')[0]);
		this.card = card;
		this.card.querySelector('.ghcard__carddate').textContent = date;
		this.card.querySelector('.ghcard__avatar').src = obj.author.avatar_url.
		this.card.querySelector('.ghcard__authorname').textContent = obj.commit.committer.name;
        this.card.querySelector('.ghcard__email').textContent = obj.commit.committer.email;
        this.card.querySelector('.ghcard__commit').textContent = obj.commit.message;;
		return this.card;
	}
}
