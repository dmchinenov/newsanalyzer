// styles
import "../about.css";

// classes
import { GitHubApi } from '../../js/modules/GithubApi.js';
import { CommitCardList } from '../../js/components/CommitCardList.js';
import { CommitCard } from '../../js/components/CommitCard.js';
import { CreateDate } from '../../js/components/CreateDate.js';
import { GH_API_DATA, MOUNTHS, ABOUT_SELECTORS } from '../../js/constans/constants.js';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


(function () {
    const sliderContainer = document.querySelector(".slider");
    const cardContainer = document.querySelector(".slider__container")
    const date = new Date()
    const createDate = new CreateDate(date, MOUNTHS.mounthsForIndex);
    const gitHubApi = new GitHubApi(GH_API_DATA);
    const commitCard = new CommitCard(ABOUT_SELECTORS.cardTemplate, createDate)
    const commitCardList = new CommitCardList(commitCard, cardContainer, swiperInit)

    // коллбэк слайдера
    function swiperInit() {
        const swiper = new Swiper(sliderContainer, {
            init: true,
            slidesPerView: 1,
            updateOnWindowResize: true,
            speed: 500,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.slider__button-left',
                prevEl: '.slider__button-right',
            },
        })
    }

    gitHubApi.loadCommits().then((res) => {
        commitCardList.renderCard(res)
        ABOUT_SELECTORS.ghLink.href = `https://github.com/${GH_API_DATA.apiUser}`;
    });


})();


// исправить баг: полоска под меню не правильно отображается