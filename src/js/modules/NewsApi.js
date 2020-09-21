// NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews.
//getNews возвращает список новостей на основе запроса.
//Методы getNews и getCommits возвращают промис, содержат в себе обработку ответа сервера и обязательный блок сatch,
// бросающий ошибку дальше с помощью Promise.reject или throw. Также классы NewsApi, GithubApi и DataStorage не должны взаимодействовать с DOM напрямую из своих методов.

export class NewsApi {
  constructor(NEWS_API_DATA, NEWS_API_URL, SEARCH_VALUE, dayTo, dayFrom) {
    this.url = NEWS_API_URL;
    this.key = NEWS_API_DATA.API_KEY;
    this.lang = NEWS_API_DATA.API_LANG;
    this.sortby = NEWS_API_DATA.API_SORTBY;
    this.pageSize = NEWS_API_DATA.API_PAGESIZE;
    this.searchInput = SEARCH_VALUE;
    this.dayTo = dayTo;
    this.dayFrom = dayFrom;
  }
  // загружаем данные о пользователе
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
