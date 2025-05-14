
export function firstLetterCapital(letter: string) {
  if (letter != undefined && letter != null && letter != "") {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }
}