
// selectors
export const SELECTORS = {
	searchForm: document.querySelector('.search__form'),
	searchError: document.querySelector('.search__error'),
	searchInput: document.querySelector('.search__input'),
	searchButton: document.querySelector('.search__button'),
	preloader: document.querySelector('.preloader'),
	notFound: document.querySelector('.infonotfound'),
	cardContainer: document.querySelector('.main__cardcontainer'),
	mainButton: document.querySelector('.main__button'),
	newCardTemplate: document.querySelector('.cardtemplate'),
	main: document.querySelector('.main'),
}

export const ABOUT_SELECTORS = {
	slider: document.querySelector('.slider'),
	cardContainer: document.querySelector('.slider__container'),
	cardTemplate: document.querySelector('.ghcardtemplate'),
	cardDate: document.querySelector('.ghcard__carddate'),
	cardAvatar: document.querySelector('.ghcard__avatar'),
	cardAuthorName: document.querySelector('.ghcard__authorname'),
	cardEmail: document.querySelector('.ghcard__email'),
	cardCommitText: document.querySelector('.ghcard__commit'),
	ghLink: document.querySelector('.gh__ghlink'),
}

export const GH_API_DATA = {
	apiUrl: 'https://api.github.com/repos/',
	apiUser: 'dmchinenov/',
	apiRep: 'newsanalyzer/commits',
}

// objects
export const ERROR_MESSAGES = {
	emptyinput: 'Нужно ввести ключевое слово',
	errorlength: 'Должно быть от 3 до 30 символов',
	errorpattern: "Могут быть буквы и цифры, без пробелов и спец-символов"
};

export const NEWS_API_DATA = {
	apiKey: '3f8789c52cef43fda9feaf806e0d31a1',
	apiLang: 'ru',
	apiSortby: 'publishedAt',
	apiPageSize: 100,
	apiUrl: process.env.NODE_ENV === 'production'
		? 'https://nomoreparties.co/news/v2/everything?'
		: 'https://newsapi.org/v2/everything?',
};


// other constants
export const SUMM_CARDS_RENDER = 3;
export const DAY_WEEKS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
export const MOUNTHS = {
	mounthsForIndex: {
		'01': 'января',
		'02': 'февраля',
		'03': 'марта',
		'04': 'апреля',
		'05': 'мая',
		'06': 'июня',
		'07': 'июля',
		'08': 'августа',
		'09': 'сентября',
		'10': 'октября',
		'11': 'ноября',
		'12': 'декабря',
	},
	mounthsForAnalytics: {
		'01': 'январь',
		'02': 'февраль',
		'03': 'март',
		'04': 'апрель',
		'05': 'май',
		'06': 'июнь',
		'07': 'июль',
		'08': 'август',
		'09': 'сентябрь',
		'10': 'октябрь',
		'11': 'ноябрь',
		'12': 'декабрь',
	}
}
