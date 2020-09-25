// CommitCardList. Класс списка карточек коммитов на странице «О проекте».

export class CommitCardList {
    constructor(commitCard, container) {
        this.commitCard = commitCard;
        this.container = container;
        this.clearCommitContainer = this.clearCommitContainer.bind(this);
    }

    renderCard(res) {
        res.forEach((item) => {
            this.container.appendChild(this.commitCard.createCard(item));
        });
    }

    clearCommitContainer() {
        this.container.innerHTML = '';
    }
}
