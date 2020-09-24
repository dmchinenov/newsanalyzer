// styles
import '../index.css';

// classes

import { Validation } from '../../js/components/Validation.js';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { CreateDate } from '../../js/components/CreateDate.js';
import { ShowHideDisabled } from '../../js/components/ShowHide.js';
import { NewsCard } from '../../js/components/NewsCard';
import { NewsCardList } from '../../js/components/NewsCardList';

// constants
import { SELECTORS, ERROR_MESSAGES, NEWS_API_URL, NEWS_API_DATA, SUMM_CARDS_RENDER } from '../../js/constans/constants.js';
import { dateChanger } from '../../js/utils/DateChanger.js';


(function () {
	const dateFromWeek = new Date();
	const dateToday = new Date();
	const createDate = new CreateDate(dateFromWeek, dateToday);
	const showHideDisabled = new ShowHideDisabled();
	const newsCard = new NewsCard(SELECTORS.newCardTemplate, dateChanger);
	const dayTo = createDate.dayTo();
	const dayFrom = createDate.dayFrom();
	const newsApi = new NewsApi(NEWS_API_DATA, NEWS_API_URL, SELECTORS.searchInput, dayTo, dayFrom);
	const newsCardList = new NewsCardList(newsCard, SELECTORS.cardContainer, SUMM_CARDS_RENDER, SELECTORS.mainButton);
	const validation = new Validation(SELECTORS.searchForm, ERROR_MESSAGES, SELECTORS.searchError);

	// коллбэк при сабмите формы. Проверяет валидность формы, скрывает/открывает блоки, загружает новости
	function submitSearchButton() {
		if (validation.isFormValid(SELECTORS.searchForm)) {
			showHideDisabled.disabled(SELECTORS.searchButton, true);
			newsCardList.clearCardContainer();
			showHideDisabled.hide(SELECTORS.notFound);
			showHideDisabled.show(SELECTORS.preloader);
			newsApi.loadCard().then((res) => {
				if (res.articles == 0) {
					showHideDisabled.show(SELECTORS.notFound);
				}
				showHideDisabled.hide(SELECTORS.preloader);
				showHideDisabled.show(SELECTORS.main);
				showHideDisabled.show(SELECTORS.mainButton);
				showHideDisabled.disabled(SELECTORS.searchButton, false);
				newsCardList.renderCard(res);
			});
		}
	}
	// слушатель состояния инпутов
	validation.setEventListener();

	// слушатель кнопки поска
	SELECTORS.searchForm.addEventListener('submit', function (event) {
		event.preventDefault();
		submitSearchButton(event);
	});

	// слушатель кнопки подгрузки новостей
	SELECTORS.mainButton.addEventListener('click', function () {
		newsApi.loadCard().then((res) => {
			newsCardList.renderCard(res);
			if (document.querySelectorAll('.card').length >= res.articles.length) {
				showHideDisabled.hide(SELECTORS.mainButton);
			}
		});
	});



})();
