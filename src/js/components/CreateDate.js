// Класс работает с датами. Получает необходимые числа, преобразует данные в нужный вид

export class CreateDate {
	constructor(date, MOUNTHS) {
		this.date = date;
		this.dayChanger = this.dayExtract.bind(this);
		this.mounthChanger = this.mounthExtract.bind(this);
		this.yearChanger = this.yearExtract.bind(this);
		this.dayTo = this.dayTo.bind(this)
		this.mounths = MOUNTHS;
	}

	// Получаем начальную дату (1 день назад) и номер дня недели
	dayTo() {
		let dayToday = []
		this.date.setDate(this.date.getDate() - 1);
		dayToday.push(this.date.toISOString().split('T')[0]);
		dayToday.push(this.date.getDay())
		return dayToday;
	}

	// Получаем конечную дату (неделя назад) 
	dayFrom() {
		this.date.setDate(this.date.getDate() - 6);
		const dayFromWeek = this.date.toISOString().split('T')[0];
		return dayFromWeek;
	}

	// Получаем массив из 7 последних дней в формате ["2020-09-20", 3], второй элемент - номер дня в неделе.
	getArrDates() {
		let arrDates = [];
		for (let i = 0; i <= 6; i++) {
			arrDates.push(this.dayTo());
		}
		return arrDates.reverse()
	}

	// Получаем массив из 7 последних дней недели в формате ["20"]
	getArrDays(arr) {
		let arrDays = [];
		arr.forEach((item) => {
			arrDays.push(item[0].split('-')[2]);
		})
		return arrDays;
	}

	// Получаем дату в формате "20-12-2020"
	dateChanger(date) {
		const day = this.dayExtract(date);
		const mounth = this.mounthExtract(date);
		const year = this.yearExtract(date);
		const returnDate = `${day}` + ' ' + `${mounth}` + ', ' + `${year}`;
		return returnDate;
	}

	// Получаем день из даты
	dayExtract(date) {
		let day = date.substr(8, 2);
		if (day.startsWith(0)) {
			day = day.substr(1, 1)
		}
		return day;
	}

	// Получаем месяц из даты
	mounthExtract(date) {
		let mounth = date.substr(5, 2).toString();
		mounth = this.mounths[mounth];
		return mounth;
	}

	// Получаем год из даты
	yearExtract(date) {
		const year = date.substr(0, 4);
		return year;
	}
}
