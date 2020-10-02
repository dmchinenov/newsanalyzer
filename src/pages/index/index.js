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
import { ERROR_MESSAGES, NEWS_API_DATA, SUMM_CARDS_RENDER, MOUNTHS } from '../../js/constans/constants.js';

(function () {
	const searchForm = document.querySelector('.search__form');
	const searchError = document.querySelector('.search__error');
	const searchInput = document.querySelector('.search__input');
	const searchButton = document.querySelector('.search__button');
	const preloader = document.querySelector('.preloader');
	const notFound = document.querySelector('.infonotfound');
	const notFoundError = document.querySelector('.infonotfound_error');
	const cardContainer = document.querySelector('.main__cardcontainer');
	const mainButton = document.querySelector('.main__button');
	const newCardTemplate = document.querySelector('.cardtemplate');
	const main = document.querySelector('.main');
	const date = new Date();
	const createDate = new CreateDate(date, MOUNTHS.mounthsForIndex);
	const showHideDisabled = new ShowHideDisabled();
	const newsCard = new NewsCard(newCardTemplate, createDate);
	const dataStorage = new DataStorage();
	const dayTo = createDate.dayTo()[0];
	const dayFrom = createDate.dayFrom();
	const newsApi = new NewsApi(NEWS_API_DATA, searchInput, dayTo, dayFrom);
	const newsCardList = new NewsCardList(newsCard, cardContainer, SUMM_CARDS_RENDER, mainButton);
	const validation = new Validation(searchForm, ERROR_MESSAGES, searchError);

	// Проверяем наличие ключа и объекта в localStorage
	function checkLocalStorage() {
		if (dataStorage.getItem("keyWord") && dataStorage.getItem("resObject")) {
			return true;
		} else {
			return false;
		}
	}

	// Коллбэк загрузки Карточек. Проверяет валидность формы, скрывает/открывает блоки, загружает и рендерит карточки
	function submitSearchButton() {
		if (validation.isFormValid(searchForm)) {
			showHideDisabled.disabled(searchButton, true);
			showHideDisabled.hide(main);
			showHideDisabled.hide(notFound);
			showHideDisabled.hide(notFoundError);
			showHideDisabled.show(mainButton);
			showHideDisabled.show(preloader);
			newsCardList.clearCardContainer();
			dataStorage.clear();
			newsApi.loadCard()
				.then((res) => {
					if (res.articles == 0) {
						showHideDisabled.show(notFound);
						showHideDisabled.hide(preloader);
					}
					else {
						dataStorage.setItem('resObject', res);
						dataStorage.setItem('keyWord', searchInput.value);
						showHideDisabled.hide(preloader);
						showHideDisabled.show(main);
						newsCardList.renderCard(res);
					}
					showHideDisabled.disabled(searchButton, false);
				})
				.catch((err) => {
					showHideDisabled.hide(preloader);
					showHideDisabled.show(notFoundError);
					showHideDisabled.disabled(searchButton, false);
				})
		}
	}

	// Функция подгрузки карточек
	function renderCardFromLocalStorage() {
		const res = dataStorage.getItem('resObject');
		newsCardList.renderCard(res);
		if (document.querySelectorAll('.card').length >= res.articles.length) {
			showHideDisabled.hide(mainButton);
		}
	}

	// Функция при загрузке главной страницы
	function openMainPage() {
		if (checkLocalStorage()) {
			searchInput.value = dataStorage.getItem("keyWord");
			showHideDisabled.show(main);
			renderCardFromLocalStorage()
		}
	}

	// слушатель состояния инпута формы поиска
	validation.setEventListener();

	// слушатель кнопки поиска
	searchForm.addEventListener('submit', function (event) {
		event.preventDefault();
		submitSearchButton(event);
	});

	// слушатель кнопки подгрузки новостей
	mainButton.addEventListener('click', function () {
		renderCardFromLocalStorage()
	});

	openMainPage()

})();
