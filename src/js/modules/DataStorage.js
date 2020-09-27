// Взаимодействие с локальным хранилищем

export class DataStorage {
    constructor() {
    }

    // Записываем данные в localStorage
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Забираем данные из localStorage
    getItem(key) {
        const data = JSON.parse(localStorage.getItem(key));
        return data;
    }

    // Очищаем localStorage
    clear() {
        localStorage.clear()
    }
}