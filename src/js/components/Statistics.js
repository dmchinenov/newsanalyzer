// Statistics. Класс, отвечающий за логику работы графиков со статистикой на странице аналитики. 

export class Statistics {
    constructor(resObject, keyWord, createDate) {
        this.resObject = resObject;
        this.keyWord = keyWord;
        this.createDate = createDate;
    }

    // Получаем число с количеством упоминаний в заголовке
    getResultsOnTitle() {
        let keyOnTitle = 0;
        this.resObject.articles.forEach((item) => {
            if (item.title) { // Проверяем, что заголовок существует и не возвращается null
                if (item.title.toUpperCase().includes(this.keyWord.toUpperCase())) { // Учитываем результаты с регистром
                    keyOnTitle++;
                }
            }
        });
        return keyOnTitle;
    }

    // Получаем объект с количеством упоминаний по конкретной дате
    getObjNewsCurrentDay(date) {
        let object = {}
        for (let i = 0; i < date.length; i++) {
            let summ = 0;
            this.resObject.articles.forEach((item) => {
                if (item.publishedAt.includes(date[i][0])) { // Проверяем соответствие дате
                    if (item.title) { // Проверяем, что заголовок существует и не возвращается null
                        if (item.title.toUpperCase().includes(this.keyWord.toUpperCase())) { // Учитываем результаты с регистром
                            // (!!!) Если хотим дополнительно учитывать упоминание в description, добавляем в проверку
                            // выше -  || item.description.toUpperCase().includes(this.keyWord.toUpperCase()))
                            summ = ++summ
                        }
                    }
                }
            });
            object[i] = summ;
        }
        return object;
    }

    // Устанавливаем колонкам нужные даты и дни недели
    setDateToDaysColumn(statsItemDateElements, arrDays, arrDates, DAYWEEKS) {
        for (let i = 0; i < statsItemDateElements.length; i++) {
            statsItemDateElements[i].textContent = arrDays[i] + ', ' + DAYWEEKS[arrDates[i][1]];
        }
    }

    // Устанавливаем количество упоминаний в заголовках в график статистики по дням
    setRequestToGraph(objGraphElements, objNewsCurrentDay) {
        for (let i = 0; i < objGraphElements.length; i++) {
            if (objNewsCurrentDay[i] == 0) {
                objGraphElements[i].setAttribute("style", `width: 1%;`);
                objGraphElements[i].textContent = 0;
            } else {
                objGraphElements[i].setAttribute("style", `width: ${objNewsCurrentDay[i] + 1}%`);
                objGraphElements[i].textContent = objNewsCurrentDay[i];
            }
        }
    }
}



