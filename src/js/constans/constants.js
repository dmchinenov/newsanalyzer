// Константы должны быть в папке src/js/constants. В константах можно хранить какие-то настройки приложения, тексты сообщений об ошибках, селекторы элементов.

// objects
export const ERROR_MESSAGES = {
	emptyinput: 'Нужно ввести ключевое слово',
	errorlength: 'Должно быть от 3 до 30 символов'
};

export const NEWS_API_URL =
	process.env.NODE_ENV === 'production'
		? 'https://nomoreparties.co/news/v2/everything?'
		: 'https://newsapi.org/v2/everything?';
export const NEWS_API_DATA = {
	API_KEY: '3f8789c52cef43fda9feaf806e0d31a1',
	API_LANG: 'ru',
	API_SORTBY: 'publishedAt',
	API_PAGESIZE: 100
};

// selectors
export const SEARCH_FORM = document.querySelector('.search__form');
export const SEARCH_ERROR = document.querySelector('.search__error');
export const SEARCH_INPUT = document.querySelector('.search__input');
export const PRELOADER = document.querySelector('.preloader');
export const NOT_FOUND = document.querySelector('.infonotfound');
export const TEMPLATE = document.querySelector('.cardtemplate').content.querySelector(".card");
