// Modules
import moment from "moment";

export function dateToNumber (date:string) {
  return ((moment(date, "YYYY/MM/DD").valueOf())/1000) - 1;
}