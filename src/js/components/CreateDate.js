export class CreateDate {
  constructor(date) {
    this.date = date;
  }

  dayTo() {
    this.date.setDate(this.date.getDate() + 1);
    const today = this.date.toISOString().split("T")[0];
    return today;
  }

  dayFrom() {
    this.date.setDate(this.date.getDate() - 7);
    const dayfrom = this.date.toISOString().split("T")[0];
    return dayfrom;
  }
}
