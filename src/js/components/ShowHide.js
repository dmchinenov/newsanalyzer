// класс скрывает/отображает переданные элементы или блоки

export class ShowHide {
    constructor() {
     
    }
// show(element) {
//     element.classList.add("showelem")
// }
// hide(element) {
//     element.classList.remove("showelem")
// }
show(element) {
    element.hidden = false;
}
hide(element) {
    element.hidden = true;
}
}