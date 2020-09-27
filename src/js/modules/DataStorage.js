// Взаимодействие с локальным хранилищем

export class DataStorage {
    constructor() {
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