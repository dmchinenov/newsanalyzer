
export const ERROR_MESSAGES = {
	emptyinput: 'Нужно ввести ключевое слово',
	errorlength: 'Должно быть от 3 до 30 символов',
	errorpattern:  "Могут быть буквы и цифры, без пробелов и спец-символов"
};

export const NEWS_API_DATA = {
	apiKey: '3f8789c52cef43fda9feaf806e0d31a1',
	apiLang: 'ru',
	apiSortby: 'publishedAt',
	apiPageSize: 100
};

export const NEWS_API_URL =
	process.env.NODE_ENV === 'production'
		? 'https://nomoreparties.co/news/v2/everything?'
		: 'https://newsapi.org/v2/everything?';


// other constants
export const SUMM_CARDS_RENDER = 3;

// selectors
export const SELECTORS = {
	searchForm: document.querySelector('.search__form'),
	searchError: document.querySelector('.search__error'),
	searchInput: document.querySelector('.search__input'),
	preloader: document.querySelector('.preloader'),
	notFound: document.querySelector('.infonotfound'),
	newCardTemplate: document.querySelector('.cardtemplate').content.querySelector(".card"),
	cardContainer: document.querySelector('.main__cardcontainer'),
	mainButton: document.querySelector('.main__button'),
	main: document.querySelector('.main'),
}