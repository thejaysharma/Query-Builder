import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RuleGroup } from "./interface";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getQueryString = (group: RuleGroup): string => {
  const conditions = group.children
    .map((child) => {
      if (child.type === "rule_group") {
        return `"${getQueryString(child)}"`;
      } else {
        let conditionString = "";
        switch (child.condition) {
          case "Equals":
            conditionString = `==`;
            break;
          case "Does not equal":
            conditionString = `!=`;
            break;
          default:
            conditionString = child.condition || "";
            break;
        }

        return `(field.${child.field?.toLowerCase()}) ${conditionString} "${
          child.criteria
        }"`;
      }
    })
    .join(` ${group.conjunction == "AND" ? "&&" : "||"} `);

  return group.not ? `NOT "${conditions}"` : conditions;
};
