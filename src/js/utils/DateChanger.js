import { mounths } from '../constans/constants.js'

export const dateChanger = function (date) {
    const day = dayChanger(date);
    const mounth = mounthChanger(date);
    const year = yearChanger(date);
    const returnDate = `${day}` + ' ' + `${mounth}` + ', ' + `${year}`;
    return returnDate;
}

function dayChanger(date) {
    let day = date.substr(8, 2);
    if (day.startsWith(0)) {
        day = day.substr(1, 1)
    }
    return day;
}

function mounthChanger(date) {
    let mounth = date.substr(5, 2).toString();
    mounth = mounths.mounthsForIndex[mounth];
    return mounth;
}

function yearChanger(date) {
    const year = date.substr(0, 4);
    return year;
}
