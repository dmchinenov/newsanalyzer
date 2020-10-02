// Вспомогательные функции

// Функция для включения анимации строки с ошибкой валидации
export const vibroError = ((elem) => {
    elem.classList.add("search__error_anim");
    setTimeout(() => { elem.classList.remove("search__error_anim"); }, 500);
});

// Функция для обработки текстовых данных, приходящих с сервера
export const sanitizeHTML = (str) => {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};



