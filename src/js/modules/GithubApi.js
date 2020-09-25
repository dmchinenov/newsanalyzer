
export class GitHubApi {
    constructor(GH_API_DATA) {
        this.url = GH_API_DATA.apiUrl;
        this.user = GH_API_DATA.apiUser;
        this.rep = GH_API_DATA.apiRep;
    }
    // загружаем данные о пользователе
    loadCommits() {
        return fetch(
            `${this.url}` +
            `${this.user}` +
            `${this.rep}`
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