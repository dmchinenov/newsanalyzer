// Statistics. Класс, отвечающий за логику работы графиков со статистикой на странице аналитики. Конструктор класса получает объект, 
// содержащий текущее состояние локального браузерного хранилища.

export class Statistics {
    constructor(resObject, keyWord, createDate) {
        this.resObject = resObject;
        this.keyWord = keyWord;
        this.createDate = createDate;
    }

    // Получаем количество упоминаний в заголовке
    getResultsOnTitle() {
        let keyOnTitle = 0;
        this.resObject.articles.forEach((item) => {
            const keyWord = this.keyWord;
            if (item.title.toUpperCase().includes(keyWord.toUpperCase())) {
                keyOnTitle++;
            }
        });
        return keyOnTitle;
    }

    // Получаем количество новостей и упоминаний по дате
    getSummRequest(date) {
        let number = 0;
        this.resObject.articles.forEach((item) => {
            if (item.publishedAt.includes(date)) {
                if (item.title.toUpperCase().includes(this.keyWord.toUpperCase())) {
                    number++
                }
            }
        });
        return number;
    }

}




