import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Currencyformatter = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "aoa",
});
