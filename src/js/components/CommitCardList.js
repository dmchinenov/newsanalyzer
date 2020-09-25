// Рендерит карточки в контейнер коммитов

export class CommitCardList {
    constructor(commitCard, container, swiperInit) {
        this.commitCard = commitCard;
        this.container = container;
        this.clearCommitContainer = this.clearCommitContainer.bind(this);
        this.swiperInit = swiperInit;
    }

    renderCard(res) {
        res.forEach((item) => {
            this.container.appendChild(this.commitCard.createCard(item));
        });
        this.swiperInit();
    }

    clearCommitContainer() {
        this.container.innerHTML = '';
    }
}
