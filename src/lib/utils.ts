import moment from "moment";

export function firstLetterCapital(letter: string) {
  if (letter != undefined && letter != null && letter != "") {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }
}

// Day, Month, Year converted
type DateFormat =
  | "DD"
  | "dd"
  | "MM"
  | "mm"
  | "YYYY"
  | "yyyy"
  | "DD/MM/YYYY"
  | "dd/mm/yyyy"
  | "DD/MM/YYYY on hh:mm a";

export function transformDate(date: string, format: DateFormat = "DD/MM/YYYY") {
  if (!date) return '';
  return moment(date).format(format);
}