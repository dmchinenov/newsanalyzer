// styles
import '../index.css';

// classes
import { FormValidator } from '../../js/components/Validator.js';
import { NewsApi } from '../../js/modules/NewsApi.js';
import { CreateDate } from '../../js/components/CreateDate.js';
import { ShowHide } from '../../js/components/ShowHide.js';
import { NewsCard } from '../../js/components/NewsCard';

// constants
import {
	ERROR_MESSAGES,
	SEARCH_FORM,
	SEARCH_ERROR,
	SEARCH_INPUT,
	NEWS_API_URL,
	NEWS_API_DATA,
	PRELOADER,
  NOT_FOUND,
  TEMPLATE
} from '../../js/constans/constants.js';
import { NewsCardList } from '../../js/components/NewsCardList';

const CARD_CONTAINER = document.querySelector('.main__cardcontainer');

// new classes
const date = new Date();
const showHide = new ShowHide();
const newsCard = new NewsCard(TEMPLATE);
const createDate = new CreateDate(date);
const dayTo = createDate.dayTo();
const dayFrom = createDate.dayFrom();
const newsApi = new NewsApi(NEWS_API_DATA, NEWS_API_URL, SEARCH_INPUT, dayTo, dayFrom);
const newsCardList = new NewsCardList(newsCard, CARD_CONTAINER, newsApi); 
const validateForm = new FormValidator(SEARCH_FORM, ERROR_MESSAGES, SEARCH_ERROR);



//  отслеживаем содержание инпутов
validateForm.setEventListener();

// ставим слушатель на кнопку, валидируем форму, обрабатываем запрос
SEARCH_FORM.addEventListener('submit', function(event) {
	event.preventDefault();
	if (validateForm.isFormValid(SEARCH_FORM)) {
		showHide.hide(NOT_FOUND);
		showHide.show(PRELOADER);
		newsApi.loadCard().then((res) => {
			if (res.articles == 0) {
				showHide.show(NOT_FOUND);
			}
      showHide.hide(PRELOADER);
      newsCardList.renderCard(res.articles);
      
		});
	}
});
