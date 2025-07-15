import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...styles: ClassValue[]) => {
  return twMerge(clsx(styles));
};

export default cn;
