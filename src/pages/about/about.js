// styles
import "../about.css";

// classes
import { GitHubApi } from '../../js/modules/GithubApi.js';
import { CommitCardList } from '../../js/components/CommitCardList.js';
import { CommitCard } from '../../js/components/CommitCard.js';
import { CreateDate } from '../../js/components/CreateDate.js';


import { GH_API_DATA, MOUNTHS, ABOUT_SELECTORS } from '../../js/constans/constants.js';


const date = new Date()
const createDate = new CreateDate(date, MOUNTHS);
const gitHubApi = new GitHubApi(GH_API_DATA);
const commitCard = new CommitCard(ABOUT_SELECTORS.cardTemplate, createDate)
const commitCardList = new CommitCardList(commitCard, ABOUT_SELECTORS.cardContainer)


gitHubApi.loadCommits().then((res) => {
    commitCardList.renderCard(res)
});




// исправить баг: полоска под меню не правильно отображается