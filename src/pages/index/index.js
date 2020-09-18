import "../index.css";

import {FormValidator, errorMessages} from "../../js/components/Validator.js"


const searchForm = document.querySelector(".search__form");
const validateForm = new FormValidator(searchForm);

validateForm.setEventListener();


searchForm.addEventListener('submit', function() {
    event.preventDefault();
    validateForm.isFormValid(searchForm);
});
