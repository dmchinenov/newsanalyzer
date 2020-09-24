// styles
import '../index.css';

// classes

import { Validation } from '../../js/components/Validation.js';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { CreateDate } from '../../js/components/CreateDate.js';
import { ShowHide } from '../../js/components/ShowHide.js';
import { NewsCard } from '../../js/components/NewsCard';
import { NewsCardList } from '../../js/components/NewsCardList';

// constants
import { SELECTORS, ERROR_MESSAGES, NEWS_API_URL, NEWS_API_DATA, SUMM_CARDS_RENDER } from '../../js/constans/constants.js';

(function () {

	const dateFromWeek = new Date();
	const dateToday = new Date();
	const createDate = new CreateDate(dateFromWeek, dateToday);
	const showHide = new ShowHide();
	const newsCard = new NewsCard(SELECTORS.newCardTemplate);
	const dayTo = createDate.dayTo();
	const dayFrom = createDate.dayFrom();
	const newsApi = new NewsApi(NEWS_API_DATA, NEWS_API_URL, SELECTORS.searchInput, dayTo, dayFrom);
	const newsCardList = new NewsCardList(newsCard, SELECTORS.cardContainer, SUMM_CARDS_RENDER, showHide, SELECTORS.mainButton);
	const validation = new Validation(SELECTORS.searchForm, ERROR_MESSAGES, SELECTORS.searchError);

	//  отслеживаем содержание инпутов
	validation.setEventListener();

	function submitSearchButton() {
		if (validation.isFormValid(SELECTORS.searchForm)) {
			newsCardList.clearCardContainer();
			showHide.hide(SELECTORS.notFound);
			showHide.show(SELECTORS.preloader);
			newsApi.loadCard().then((res) => {
				if (res.articles == 0) {
					showHide.show(SELECTORS.notFound);
				}
				showHide.hide(SELECTORS.preloader);
				showHide.show(SELECTORS.main);
				newsCardList.renderCard(res);
			});
		}
	}

	// ставим слушатель на кнопку, валидируем форму, обрабатываем запрос
	SELECTORS.searchForm.addEventListener('submit', function (event) {
		event.preventDefault();
		submitSearchButton(event);
	});

	SELECTORS.mainButton.addEventListener('click', function () {
		newsApi.loadCard().then((res) => {
			newsCardList.renderCard(res);
		});
	});



})();
