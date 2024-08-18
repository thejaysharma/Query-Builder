import { Rule } from "../interface";

export const fields: Rule["field"][] = [
  "Theme",
  "Sub-theme",
  "Reason",
  "Language",
  "Source",
  "Rating",
  "Time Period",
  "Customer ID",
];
export const conditions: Rule["condition"][] = [
  "Equals",
  "Does not equal",
  "Like",
  "Not like",
  "Is Empty",
  "Is",
  "Is not",
];
export const criterias: Rule["criteria"][] = [
  "Offers",
  "Performance",
  "Platform",
  "Product Feedback",
];
