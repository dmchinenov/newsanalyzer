// Вспомогательные функции

export const vibroError = ((elem) => {
    elem.classList.add("search__error_anim");
    setTimeout(() => { elem.classList.remove("search__error_anim"); }, 500);
});


