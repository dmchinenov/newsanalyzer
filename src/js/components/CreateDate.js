export class CreateDate {
	constructor(dateFromWeek, dateToday) {
		this.dateFromWeek = dateFromWeek;
		this.dateToday = dateToday;
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
}
