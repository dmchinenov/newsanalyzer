// Класс работает с датами. Получает необходимые числа, преобразует данные в нужный вид

export class CreateDate {
	constructor(date, MOUNTHS) {
		this.date = date;
		this.dayChanger = this.dayExtract.bind(this);
		this.mounthChanger = this.mounthExtract.bind(this);
		this.yearChanger = this.yearExtract.bind(this);
		this.mounths = MOUNTHS;
	}

	dayTo() {
		this.date.setDate(this.date.getDate());
		const dayToday = this.date.toISOString().split('T')[0];
		return dayToday;
	}

	dayFrom() {
		this.date.setDate(this.date.getDate() - 6);
		const dayFromWeek = this.date.toISOString().split('T')[0];
		return dayFromWeek;
	}

	dateChanger(date) {
		const day = this.dayExtract(date);
		const mounth = this.mounthExtract(date);
		const year = this.yearExtract(date);
		const returnDate = `${day}` + ' ' + `${mounth}` + ', ' + `${year}`;
		return returnDate;
	}

	dayExtract(date) {
		let day = date.substr(8, 2);
		if (day.startsWith(0)) {
			day = day.substr(1, 1)
		}
		return day;
	}

	mounthExtract(date) {
		let mounth = date.substr(5, 2).toString();
		mounth = this.mounths.mounthsForIndex[mounth];
		return mounth;
	}

	yearExtract(date) {
		const year = date.substr(0, 4);
		return year;
	}
}
