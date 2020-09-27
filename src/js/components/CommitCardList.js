// Рендерит карточки в контейнер коммитов

export class CommitCardList {
    constructor(commitCard, container, swiperInit) {
        this.commitCard = commitCard;
        this.container = container;
        this.swiperInit = swiperInit;
    }

    // Рендер карточек в блок slider
    renderCard(res) {
        res.forEach((item) => {
            this.container.appendChild(this.commitCard.createCard(item));
        });
        this.swiperInit();
    }
}
