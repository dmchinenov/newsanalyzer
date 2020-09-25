// DataStorage. Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера.

export class DataStorage {
    constructor() {
        this.setItem = this.setItem.bind(this);
        this.getItem = this.getItem.bind(this);
        this.clear = this.clear.bind(this);
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        const data = JSON.parse(localStorage.getItem(key));
        return data;
    }
    clear() {
        localStorage.clear()
    }
}