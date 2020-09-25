export class CreateDate {
	constructor(dateFromWeek, dateToday, MOUNTHS) {
		this.dateFromWeek = dateFromWeek;
		this.dateToday = dateToday;
		this.dayChanger = this.dayExtract.bind(this);
		this.mounthChanger = this.mounthExtract.bind(this);
		this.yearChanger = this.yearExtract.bind(this);
		this.mounths = MOUNTHS;
	}

	dayTo() {
		this.dateFromWeek.setDate(this.dateFromWeek.getDate() - 1);
		const dayFromWeek = this.dateFromWeek.toISOString().split('T')[0];
		return dayFromWeek;
	}

	dayFrom() {
		this.dateToday.setDate(this.dateToday.getDate() - 7);
		const dayToday = this.dateToday.toISOString().split('T')[0];
		return dayToday;
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
