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
    const statsItemDateElements = document.querySelectorAll(".stats__item-date");
    const statsItemGraphElements = document.querySelectorAll(".stats__item-graph");

    // Присваиваем значения заголовкам
    const requestTitle = document.querySelector(".request__title").textContent = `Вы спросили: «${keyWord}»`;
    const requestDataTotal = document.querySelector(".request__data_number-total").textContent = resObject.articles.length;
    const requestDataTitle = document.querySelector(".request__data_number-title").textContent = statistics.getResultsOnTitle();
    const statsHeaderMounth = document.querySelector(".stats__header-date").textContent = `ДАТА (${createDate.mounthExtract(date.toISOString().split('T')[0])})`;

    // Получаем массив из 7 последних дней в формате ["2020-09-20", 3], второй элемент - номер дня в неделе.
    const arrDates = createDate.getArrDates();

    // Получаем массив из 7 последних дней недели в формате ["20"]
    const arrDays = createDate.getArrDays(arrDates);

    // Получаем объект с количеством новостей по дням недели
    const objNewsCurrentDay = statistics.getObjNewsCurrentDay(arrDates)

    // Устанвливаем колонке даты нужные значения (дату и день недели)
    statistics.setDateToDaysColumn(statsItemDateElements, arrDays, arrDates, DAY_WEEKS);

    // Устанавливаем количество упоминаний в график статистики по дням
    statistics.setRequestToGraph(statsItemGraphElements, objNewsCurrentDay)

})();

