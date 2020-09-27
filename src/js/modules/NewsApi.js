// Загружает данные от NewsApi

export class NewsApi {
	constructor(NEWS_API_DATA, searchInput, dayTo, dayFrom) {
		this.url = NEWS_API_DATA.apiUrl;
		this.key = NEWS_API_DATA.apiKey;
		this.lang = NEWS_API_DATA.apiLang;
		this.sortby = NEWS_API_DATA.apiSortby;
		this.pageSize = NEWS_API_DATA.apiPageSize;
		this.searchInput = searchInput;
		this.dayTo = dayTo;
		this.dayFrom = dayFrom;

	}
	// Загрузка карточки
	loadCard() {
		return fetch(
			`${this.url}` +
			`q=${this.searchInput.value}` +
			`&from=${this.dayFrom}` +
			`&to=${this.dayTo}` +
			`&pageSize=${this.pageSize}` +
			`&language=${this.lang}` +
			`&sortBy=${this.sortby}` +
			`&apiKey=${this.key}`
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.catch((err) => {
				return Promise.reject(`Произошла ошибка: ${err.status}`);
			});
	}
}
