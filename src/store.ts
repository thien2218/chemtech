import { writable } from "svelte/store";
import { classFormatter } from "./utils";
import type { ChemElement } from "./types";

export const curGroup = writable<string>("all");

export function setCurGroup(group: string) {
   curGroup.update((g) => {
      const formatted = classFormatter(group);
      if (g === formatted) return "all";
      return classFormatter(formatted);
   });
}

export const curElement = writable<ChemElement | null>(null);
