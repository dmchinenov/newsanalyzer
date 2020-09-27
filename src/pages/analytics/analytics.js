// styles
import "../analytics.css";

// classes
import { Statistics } from "../../js/components/Statistics.js"
import { DataStorage } from "../../js/modules/DataStorage.js"
import { CreateDate } from "../../js/components/CreateDate.js"

import { MOUNTHS, DAY_WEEKS } from '../../js/constans/constants.js';

(function () {
    const date = new Date();
    const dataStorage = new DataStorage();
    const keyWord = dataStorage.getItem("keyWord");
    const resObject = dataStorage.getItem("resObject");
    const createDate = new CreateDate(date, MOUNTHS.mounthsForAnalytics);
    const statistics = new Statistics(resObject, keyWord, createDate);
    // присваиваем значения заголовкам
    const requestTitle = document.querySelector(".request__title").textContent = `Вы спросили: «${keyWord}»`;
    const requestDataTotal = document.querySelector(".request__data_number-total").textContent = resObject.articles.length;
    const requestDataTitle = document.querySelector(".request__data_number-title").textContent = statistics.getResultsOnTitle();
    const statsHeaderMounth = document.querySelector(".stats__header-date").textContent = `ДАТА (${createDate.mounthExtract(date.toISOString().split('T')[0])})`;
    const statsItemDate = document.querySelectorAll(".stats__item-date");
    const statsItemGraph = document.querySelectorAll(".stats__item-graph");
    // Получаем массив с датой и номером дня.
    let arrDates = []
    for (let i = 0; i <= 6; i++) {
        arrDates.push(createDate.dayTo());
    }
    arrDates.reverse();
    // console.log(arrDates)

    // массив дней
    const arrDays = []
    arrDates.forEach((item) => {
        arrDays.push(item[0].split('-')[2]);
    })
    // console.log(arrDays)

    // получаем количество новостей
    let obj = {};
    for (let i = 0; i < arrDates.length; i++) {
        obj[i] = statistics.getSummRequest(arrDates[i][0])
    };
    console.log(obj)

    for (let i = 0; i < statsItemDate.length; i++) {
        statsItemDate.forEach((item) => {
            item.textContent = arrDays[i];
        })
    }

    for (let i = 0; i < statsItemDate.length; i++) {
        statsItemDate[i].textContent = arrDays[i] + ', ' + DAY_WEEKS[arrDates[i][1]]
    }

    for (let i = 0; i < statsItemGraph.length; i++) {
        if (obj[i] == 0) {      
        statsItemGraph[i].setAttribute("style", `width: 1%;`);
        statsItemGraph[i].textContent = 0;
        } else {
        statsItemGraph[i].setAttribute("style", `width: ${obj[i]}%`);
        statsItemGraph[i].textContent = obj[i];
    }
}

})();

