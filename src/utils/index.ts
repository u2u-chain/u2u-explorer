import moment from "moment/moment";

export class Utils {
  formatDate(date: string) {
    return moment.unix(Number(date)).format("h:mm :ss.SSSS A - MMM D, YYYY, [GMT]Z");
  }

  convertAmount(amount: string | number) {
    return (parseFloat(String(amount)) / 100000000).toFixed(8)
  }
}

export const utils = new Utils()