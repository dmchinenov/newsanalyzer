// styles
import '../index.css';

// classes
import { Validation } from '../../js/components/Validation.js';
import { CreateDate } from '../../js/components/CreateDate.js';
import { ShowHideDisabled } from '../../js/components/ShowHideDisabled.js';
import { NewsCard } from '../../js/components/NewsCard';
import { NewsCardList } from '../../js/components/NewsCardList';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { DataStorage } from '../../js/modules/DataStorage.js';

// constants
import { SELECTORS, ERROR_MESSAGES, NEWS_API_DATA, SUMM_CARDS_RENDER, MOUNTHS } from '../../js/constans/constants.js';


(function () {
	const date = new Date();
	const createDate = new CreateDate(date, MOUNTHS.mounthsForIndex);
	const showHideDisabled = new ShowHideDisabled();
	const newsCard = new NewsCard(SELECTORS.newCardTemplate, createDate);
	const dataStorage = new DataStorage();
	const dayTo = createDate.dayTo()[0];
	const dayFrom = createDate.dayFrom();
	const newsApi = new NewsApi(NEWS_API_DATA, SELECTORS.searchInput, dayTo, dayFrom);
	const newsCardList = new NewsCardList(newsCard, SELECTORS.cardContainer, SUMM_CARDS_RENDER, SELECTORS.mainButton);
	const validation = new Validation(SELECTORS.searchForm, ERROR_MESSAGES, SELECTORS.searchError);

	// коллбэк загрузки Карточек. Проверяет валидность формы, скрывает/открывает блоки, загружает и рендерит карточки
	function submitSearchButton() {
		if (validation.isFormValid(SELECTORS.searchForm)) {
			showHideDisabled.disabled(SELECTORS.searchButton, true);
			showHideDisabled.hide(SELECTORS.main);
			showHideDisabled.hide(SELECTORS.notFound);
			showHideDisabled.show(SELECTORS.mainButton);
			showHideDisabled.show(SELECTORS.preloader);
			newsCardList.clearCardContainer();
			dataStorage.clear();
			newsApi.loadCard().then((res) => {
				if (res.articles == 0) {
					showHideDisabled.show(SELECTORS.notFound);
					showHideDisabled.hide(SELECTORS.preloader);
				}
				else {
					dataStorage.setItem('resObject', res);
					dataStorage.setItem('keyWord', SELECTORS.searchInput.value);
					showHideDisabled.hide(SELECTORS.preloader);
					showHideDisabled.show(SELECTORS.main);
					newsCardList.renderCard(res);
				}
				showHideDisabled.disabled(SELECTORS.searchButton, false);
			});
		}
	}

	// коллбэк кнопки подгрузки карточек
	function submitMainButton() {
		const res = dataStorage.getItem('resObject');
		newsCardList.renderCard(res);
		if (document.querySelectorAll('.card').length >= res.articles.length) {
			showHideDisabled.hide(SELECTORS.mainButton);
		}
	}

	// слушатель состояния инпута формы поиска
	validation.setEventListener();

	// слушатель кнопки поиска
	SELECTORS.searchForm.addEventListener('submit', function (event) {
		event.preventDefault();
		submitSearchButton(event);
	});

	// слушатель кнопки подгрузки новостей
	SELECTORS.mainButton.addEventListener('click', function () {
		submitMainButton()
	});



})();
