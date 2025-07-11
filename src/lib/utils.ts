import moment from "moment";
import { CATEGORY_N_SUBCATEGORY_OPTIONS } from "./constants";
import { FileExtension } from "@/types/common";

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
  { keywords: ["pickup", "drop", "pickup/drop"], image: "/assets/images/car.svg" },
  { keywords: ["hotel", "hotels", "stay", "accommodation"], image: "/assets/images/hotel.svg" },
  { keywords: ["meal", "meals", "food"], image: "/assets/images/meal.svg" },
  { keywords: ["sightseeing", "tour", "itinerary", "places"], image: "/assets/images/itinerary.svg" },
  { keywords: ["transport", "travel", "vehicle", "cab"], image: "/assets/images/transport.svg" },
  { keywords: ["guide", "tour manager", "assistant"], image: "/assets/images/guide.svg" }
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

// FILES

export async function saveFile(response: Blob, filename = 'file', extension: FileExtension) {
  if (!(response instanceof Blob)) {
    console.error("Provided response is not a valid Blob");
    return;
  }

  try {
    // Create a URL for the Blob
    const url = URL.createObjectURL(response);

    // Create a temporary anchor element for the download action
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;

    // Append the anchor to the body, trigger a click to start the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the Blob URL after the download to free up memory
    URL.revokeObjectURL(url);
  } catch (error) {
    // console.log("Something went wrong!");
  }
}

export function paginate(totalItems, itemsPerPage, currentPage = 1) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Ensure currentPage is within range
  currentPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  return {
    totalItems,
    itemsPerPage,
    currentPage,
    totalPages,
    startIndex,
    endIndex,

    // Navigation functions
    goToFirstPage: () => paginate(totalItems, itemsPerPage, 1),
    goToLastPage: () => paginate(totalItems, itemsPerPage, totalPages),
    goToNextPage: () => paginate(totalItems, itemsPerPage, currentPage + 1),
    goToPrevPage: () => paginate(totalItems, itemsPerPage, currentPage - 1),
    goToPage: (page) => paginate(totalItems, itemsPerPage, page),
  };
}


export function converttoRoundedNumber(value: number | string): number {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  return Math.round(value);
}


// INDIAN CURRENCY FORMAT
export function formatIndianNumber(x: number | string): string {
  x = converttoRoundedNumber(x)
  const str = x.toString().split('.');
  const intPart = str[0];
  const decimalPart = str[1] ? '.' + str[1] : '';

  let lastThree = intPart.slice(-3);
  const rest = intPart.slice(0, -3);

  if (rest !== '') {
    lastThree = ',' + lastThree;
  }

  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decimalPart;
  return formatted;
}

// Slug for url

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // remove special chars
    .replace(/\s+/g, '-')        // replace spaces with hyphens
    .replace(/--+/g, '-');       // collapse multiple hyphens
}
