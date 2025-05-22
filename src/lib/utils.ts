import moment from "moment";
import { CATEGORY_N_SUBCATEGORY_OPTIONS } from "./constants";

export function firstLetterCapital(letter?: string) {
  if (letter != undefined && letter != null && letter != "") {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  } else {
    return ""
  }
}

export function capitalizeText(text?: string) {
  if (text != undefined && text != null && text != "") {
    const newText = text?.split(" ")?.map(item => firstLetterCapital(item)).join(" ")
    return newText;
  } else {
    return ""
  }
}

export function getCategoriesNSubCategories(category?: string) {
  return CATEGORY_N_SUBCATEGORY_OPTIONS[`${category}`]
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

const serviceImageKeywords: { keywords: string[]; image: string }[] = [
  { keywords: ["pickup", "drop", "pickup/drop"], image: "/assets/images/car.png" },
  { keywords: ["hotel", "hotels", "stay", "accommodation"], image: "/assets/images/hotel.png" },
  { keywords: ["meal", "meals", "food"], image: "/assets/images/meal.png" },
  { keywords: ["sightseeing", "tour", "itinerary", "places"], image: "/assets/images/itinerary.png" },
  { keywords: ["transport", "travel", "vehicle", "cab"], image: "/assets/images/transport.png" },
  { keywords: ["guide", "tour manager", "assistant"], image: "/assets/images/guide.png" }
];

export const getImageForService = (serviceName: string): string => {
  const normalized = serviceName.toLowerCase();

  for (const { keywords, image } of serviceImageKeywords) {
    if (keywords.some((keyword) => normalized.includes(keyword))) {
      return image;
    }
  }

  return "/assets/images/default.png";
};

